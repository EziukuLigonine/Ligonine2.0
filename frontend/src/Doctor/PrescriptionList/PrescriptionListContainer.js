import React, {Component} from 'react';
import axios from 'axios';
import {PrescriptionListComponent} from "./PrescriptionListComponent";

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

    removePrescription = (index) => {
        const items = this.state.prescriptions.filter((prescription) => {
          return prescription.id !== parseInt(index, 10);
        });
        this.setState({ prescriptions : items });
    }

    render() {
        return (
            <div>
                <PrescriptionListComponent prescriptions={this.state.prescriptions} history={this.props.history}  remove={this.removePrescription} />
            </div>
        );
    }
}
