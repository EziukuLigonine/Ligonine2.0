import React from 'react';
import axios from 'axios';
import {API} from '../ApiUrl';
import RegisterPharmacistComponent from "./RegisterPharmacistComponent";

class PharmacistEditContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            companyType: '',
            companyName: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get(API + "/api/pharmacists/" + this.props.match.params.id)
        .then(response => {
            const {name, surname, username, password, companyType, companyName} = response.data;
            this.setState({
                name : name,
                surname : surname,
                username : username,
                password : password,
                companyType : companyType,
                companyName : companyName,
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
            companyType: this.state.companyType,
            companyName: this.state.companyName
        };

        axios.put(API + "/api/pharmacists/" + this.props.match.params.id, outputProduct)
            .then((response) => {
              alert("Duomenys išsaugoti!");
              this.props.history.push("/admin/pharmacists");
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

export default PharmacistEditContainer;
