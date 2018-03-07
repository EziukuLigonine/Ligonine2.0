import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterDoctorComponent from './RegisterDoctorComponent';
import axios from 'axios';

axios.defaults.withCredentials = true;

class RegisterDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            specialisation: '',
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

    EmptyFields() {
        if (this.state.name === "" || this.state.surname === "" || this.state.username === "" || this.state.personalId === "" || this.state.specialisation === "") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }

    handleClick = (event) => {
        if (this.EmptyFields()) {
            var outputDoctor = {
                name: this.state.name,
                surname: this.state.surname,
                username: this.state.username,
                password: this.state.password,
                specialisation: this.state.specialisation
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
        if (this.state.specialisation === "") {
            alert("Prašome pasirinkti specializaciją");
        }
        axios.post(API + "/api/admin/doctors/new", outputDoctor)
            .then((response) => {
                this.setState({
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    specialisation: ''
                });
                alert("Daktaras užregistruotas!");
                this.props.history.push("/admin/doctors");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterDoctorComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    specialisation={this.state.specialisation}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterDoctor;
