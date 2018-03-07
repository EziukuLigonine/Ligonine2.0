import React, {Component} from 'react';
import {PrescriptionListComponent} from "./PrescriptionListComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

export class PrescriptionListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {prescriptions: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/prescriptions')
            .then((response) => {
                this.setState({prescriptions: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };


    render() {
        console.log(this.state.prescriptions);
        return (
            <div>
                <PrescriptionListComponent prescriptions={this.state.prescriptions} history={this.props.history}  />
            </div>
        );
    }
}
