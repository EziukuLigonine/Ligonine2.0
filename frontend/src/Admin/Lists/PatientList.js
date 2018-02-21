import React, {Component} from 'react';
import axios from 'axios';
import PatientListComponent from "./PatientListComponent";
import {API} from '../ApiUrl';

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

    removePatient = (index) => {
        const items = this.state.patients.filter((patient) => {
          return patient.id !== parseInt(index, 10);
        });
        this.setState({ patients : items });
    }

    render() {
        return (
            <div>
                <PatientListComponent patients={this.state.patients} history={this.props.history} remove={this.removePatient} />
            </div>
        );
    }
}

export default PatientList;
