import React from 'react';
import axios from 'axios';
import {API} from '../ApiUrl';
import RegisterAdminComponent from "./RegisterAdminComponent";

class AdminEditContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get(API + "/api/admins/" + this.props.match.params.id)
        .then(response => {
            const {name, surname, username, password} = response.data;
            this.setState({
                name : name,
                surname : surname,
                username : username,
                password : password,
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
            password: this.state.password
        };

        axios.put(API + "/api/admins/" + this.props.match.params.id, outputProduct)
            .then((response) => {
              alert("Duomenys išsaugoti!");
                this.props.history.push("/admin/admins");
            })
            .catch((error) => {
              alert("Nepavyko! Blogai įvesti duomenys");
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterAdminComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default AdminEditContainer;
