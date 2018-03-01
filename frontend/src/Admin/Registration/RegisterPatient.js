import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterPatientComponent from './RegisterPatientComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class RegisterPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            personalId: '',
            dateOfBirth: '',
            doctorUsername: '',
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
                [id]: value
            }
        );
    };

    IdMatchesBirth() {
        if (this.state.personalId.substring(1, 3) === this.state.dateOfBirth.substring(2, 4) &&
            this.state.personalId.substring(3, 5) === this.state.dateOfBirth.substring(5, 7) &&
            this.state.personalId.substring(5, 7) === this.state.dateOfBirth.substring(8, 10)) {
            return true;
        } else {
            alert("Asmens kodas nesutampa su gimimo data")
        }
    }

    handleClick = (event) => {
        if (this.IdMatchesBirth()) {
            var outputPatient = {
                name: this.state.name,
                surname: this.state.surname,
                username: this.state.username,
                password: this.state.password,
                personalId: this.state.personalId,
                dateOfBirth: this.state.dateOfBirth,
                doctorUsername: this.state.doctorUsername
            };
        }
        if (this.state.name === "") {
            alert("Prašome įvesti vardą");
        }
        if (this.state.surname === "") {
            alert("Prašome įvesti pavardę");
        }
        if (this.state.username === "") {
            alert("Prašome įvesti slapyvardį");
        }
        if (this.state.password.length < 6) {
            alert("Slaptažodis turi būti sudarytas iš bent 6 simbolių");
        }
        if (this.state.personalId === "") {
            alert("Prašome įvesti asmens kodą");
        }
        if (this.state.dateOfBirth === "") {
            alert("Prašome įvesti gimimo datą");
        }
        console.log(this.state.dateOfBirth);

        axios.post(API + "/api/admin/patients/new", outputPatient)
            .then((response) => {
                this.setState({
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    personalId: '',
                    dateOfBirth: '',
                    doctorUsername: ''
                });
                alert("Pacientas užregistruotas!");
                this.props.history.push("/admin/patients");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterPatientComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    personalId={this.state.personalId}
                    dateOfBirth={this.state.dateOfBirth}
                    doctorUsername={this.state.doctorUsername}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterPatient;
