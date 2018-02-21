import React, {Component} from 'react';
import axios from 'axios';
import DoctorListComponent from "./DoctorListComponent";
import {API} from '../ApiUrl';

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

    removeDoctor = (index) => {
        const items = this.state.doctors.filter((doctor) => {
          return doctor.id !== parseInt(index, 10);
        });
        this.setState({ doctors : items });
    }

    render() {
        return (
            <div>
                <DoctorListComponent doctors={this.state.doctors} history={this.props.history} remove={this.removeDoctor} />
            </div>
        );
    }
}

export default DoctorList;
