import React from 'react';
import axios from 'axios';
import {API} from '../ApiUrl';
import RegisterPatientComponent from "./RegisterPatientComponent";

class PatientEditContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            specialisation: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get(API + "/api/patients/" + this.props.match.params.id)
        .then(response => {
            const {name, surname, username, password, specialisation} = response.data;
            this.setState({
                name : name,
                surname : surname,
                username : username,
                password : password,
                specialisation : specialisation,
                history: this.props.history
            })
        })
        .catch(error => {
            console.log(error);
        })
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
        const outputProduct = {
            name: this.state.name,
            surname: this.state.surname,
            username: this.state.username,
            password: this.state.password,
            specialisation: this.state.specialisation
        };

        axios.put(API + "/api/patients/" + this.props.match.params.id, outputProduct)
            .then((response) => {
                this.props.history.goBack();
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
                    specialisation={this.state.specialisation}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default PatientEditContainer;
