import React from 'react';
import axios from 'axios';
import {PrescriptionAdministrationComponent} from "./PrescriptionAdministrationComponent";

export class PrescriptionAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalId: '',
            date: '',
            activeMat: '',
            activeMatQuantity: '',
            unit: '',
            desc: '',
            doctorUsername: '',
            validUntil: '',
            history: props.history
        }
    }

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
        const outputPrescription = {
            personalId: this.state.personalId,
            date: this.state.date,
            activeMat: this.state.activeMat,
            activeMatQuantity: this.state.activeMatQuantity,
            unit: this.state.unit,
            desc: this.state.desc,
            doctorUsername: this.state.doctorUsername,
            validUntil: this.state.validUntil
        };

        axios.post("http://localhost:8081/api/admin/prescriptions/new", outputPrescription)
            .then((response) => {
                this.setState( {
                    personalId: '',
                    date: '',
                    activeMat: '',
                    activeMatQuantity: '',
                    unit: '',
                    desc: '',
                    doctorUsername: '',
                    validUntil: ''
                });
                alert("Receptas išrašytas");
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
                    doctorUsername={this.state.doctorUsername}
                    validUntil={this.state.validUntil}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}