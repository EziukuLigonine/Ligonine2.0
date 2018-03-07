import React, {Component} from 'react';
import DoctorListComponent from "./DoctorListComponent";
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class DoctorList extends Component {

    constructor(props) {
        super(props);
        this.state = {doctors: []};
    }

    componentDidMount = () => {
        axios.get(API + "/api/doctors")
            .then((response) => {
                this.setState({doctors: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <DoctorListComponent doctors={this.state.doctors} history={this.props.history} />
            </div>
        );
    }
}

export default DoctorList;
