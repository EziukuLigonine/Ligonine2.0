import React from 'react';
import {PrescriptionAdministrationComponent} from "./PrescriptionAdministrationComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;


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
            timestamp: '',
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
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        const outputPrescription = {
            personalId: this.state.personalId,
            date: this.state.date,
            activeMat: this.state.activeMat,
            activeMatQuantity: this.state.activeMatQuantity,
            unit: this.state.unit,
            desc: this.state.desc,
            doctorUsername: this.state.doctorUsername,
            validUntil: this.state.validUntil,
            timestamp: this.state.timestamp = today
        };
        console.log(outputPrescription);
        if (this.state.personalId === "") {
            alert("Prašome įvesti asmens kodą");
        }
        if (this.state.personalId.length>11) {
            alert("Asmens kodas turi būti sudarytas iš 11 simbolių");
        }
        if (this.state.personalId.length<11) {
            alert("Asmens kodas turi būti sudarytas iš 11 simbolių");
        }
        if (this.state.activeMat === "") {
            alert("Prašome įvesti veikliąsias medžiagas");
        }
        if (this.state.activeMatQuantity === "") {
            alert("Prašome įvesti veikliosios/veikliųjų medžiagos/ų kiekį");
        }
        if (this.state.unit === "") {
            alert("Prašome įvesti kiek vienetų išrašyta");
        }
        if (this.state.desc === "") {
            alert("Prašome įvesti aprašymą");
        }
        if (this.state.validUntil === "") {
            alert("Prašome įvesti galiojimo datą");
        }

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
                    validUntil: '',
                    timestamp:''
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
