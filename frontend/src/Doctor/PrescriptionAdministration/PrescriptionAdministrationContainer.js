import React from 'react';
import {PrescriptionAdministrationComponent} from "./PrescriptionAdministrationComponent";
import axios from 'axios';

axios.defaults.withCredentials = true;


export class PrescriptionAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalId: '',
            activeMat: '',
            activeMatQuantity: '',
            unit: '',
            desc: '',
            validUntil: '',
            timestamp: '',
            patientId: '',
            doctorId: '',
            history: props.history
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/userId/')
            .then((response) => {
                this.setState({doctorId: response.data});
                axios.get('http://localhost:8081/api/patients/' +  this.props.match.params.id)
                  .then((response) => {
                    const {id, personalId} = response.data;
                    this.setState({
                      personalId: personalId,
                      patientId: id
                    });

                  })
                  .catch((error) => {
                    console.log(error);
                  })
            })
            .catch((error) => {
                console.log(error);
            });
    };


    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [id]: value
            }
        );
    };
    handleClick = (event) => {
            var outputPrescription = {
                personalId: this.state.personalId,
                activeMat: this.state.activeMat,
                activeMatQuantity: this.state.activeMatQuantity,
                unit: this.state.unit,
                desc: this.state.desc,
                validUntil: this.state.validUntil,
                timestamp: this.state.timestamp
            };

        axios.post('http://localhost:8081/api/prescriptions/new/' + this.state.doctorId + '/' + this.state.patientId, outputPrescription)
            .then((response) => {
                this.setState({
                    personalId: '',
                    activeMat: '',
                    activeMatQuantity: '',
                    unit: '',
                    desc: '',
                    validUntil: '',
                    timestamp: ''
                });
                alert("Receptas išrašytas");
                this.props.history.push("/doctor/prescriptions");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <PrescriptionAdministrationComponent
                    personalId={this.state.personalId}
                    date={this.state.date}
                    activeMat={this.state.activeMat}
                    activeMatQuantity={this.state.activeMatQuantity}
                    unit={this.state.unit}
                    desc={this.state.desc}
                    validUntil={this.state.validUntil}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
