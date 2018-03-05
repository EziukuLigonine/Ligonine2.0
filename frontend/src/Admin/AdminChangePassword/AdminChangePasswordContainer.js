/*import React from 'react';
import {API} from '../ApiUrl';
import RegisterAdminComponent from "./RegisterAdminComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

class AdminChangePasswordContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            newPassword: '',
            repeatNewPassword: '',
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
        let userData = new URLSearchParams();
        userData.append('password', this.state.password);
        const outputAdmin = {
            password: this.state.password
        };

        if (this.state.password.length < 6) {
            alert("Slaptažodis turi būti sudarytas iš 6 arba daugiau simbolių");
        }
        axios.put(API + "/api/admins/" + this.props.match.params.id, outputAdmin)
            .then((response) => {
                this.setState( {
                    password: ''
                });
                alert("Slaptažodis pakeistas");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };
    render(){
        return(
            <div>
                <RegisterAdminComponent
                    password={this.state.password}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}


export default AdminChangePasswordContainer;*/