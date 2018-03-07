import React, {Component} from 'react';
import AdminListComponent from "./AdminListComponent";
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class AdminList extends Component {

    constructor(props) {
        super(props);
        this.state = {admins: []};
    }

    componentDidMount = () => {
        axios.get(API + "/api/admins")
            .then((response) => {
                this.setState({admins: response.data});
            })
            .catch((error) => {
                console.log(error);
            });

    };

    render() {
        return (
            <div>
                <AdminListComponent admins={this.state.admins} history={this.props.history} />
            </div>
        );
    }
}

export default AdminList;
