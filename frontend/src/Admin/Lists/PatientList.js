import React, {Component} from 'react';
import PatientListComponent from "./PatientListComponent";
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientList extends Component {

    constructor(props) {
        super(props);
        this.state = {patients: []};
    }

    componentDidMount = () => {
        axios.get(API + "/api/patients")
            .then((response) => {
                this.setState({patients: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <PatientListComponent patients={this.state.patients} history={this.props.history} />
            </div>
        );
    }
}

export default PatientList;
