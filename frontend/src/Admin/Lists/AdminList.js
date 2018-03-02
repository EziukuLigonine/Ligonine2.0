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

    removeAdmin = (index) => {
        const items = this.state.admins.filter((admin) => {
          return admin.id !== parseInt(index, 10);
        });
        this.setState({ admins : items });
    }

    render() {
        return (
            <div>
                <AdminListComponent admins={this.state.admins} history={this.props.history} remove={this.removeAdmin} />
            </div>
        );
    }
}

export default AdminList;
