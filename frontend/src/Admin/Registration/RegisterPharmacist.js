import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterPharmacistComponent from './RegisterPharmacistComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class RegisterPharmacist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            companyType: '',
            companyName: '',
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

    handleClick = (event) => {
        const outputPharmacist = {
            name: this.state.name,
            surname: this.state.surname,
            username: this.state.username,
            password: this.state.password,
            companyType: this.state.companyType,
            companyName: this.state.companyName
        };
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
        if (this.state.companyType === "") {
            alert("Prašome pasirinkti įmonės tipą");
        }
        if (this.state.companyName === "") {
            alert("Prašome įvesti įmonės pavadinimą");
        }

        axios.post(API + "/api/admin/pharmacists/new", outputPharmacist)
            .then((response) => {
                this.setState({
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    companyType: '',
                    companyName: ''
                });
                alert("Vaistininkas užregistruotas!");
                this.props.history.push("/admin/pharmacists");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterPharmacistComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    companyType={this.state.companyType}
                    companyName={this.state.companyName}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterPharmacist;
