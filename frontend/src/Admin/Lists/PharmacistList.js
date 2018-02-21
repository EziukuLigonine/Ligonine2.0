import React, {Component} from 'react';
import axios from 'axios';
import PharmacistListComponent from "./PharmacistListComponent";
import {API} from '../ApiUrl';

class PharmacistList extends Component {

    constructor(props) {
        super(props);
        this.state = {pharmacists: []};
    }

    componentDidMount = () => {
        axios.get(API + "/api/pharmacists")
            .then((response) => {
                this.setState({pharmacists: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    removePharmacist = (index) => {
        const items = this.state.pharmacists.filter((pharmacist) => {
          return pharmacist.id !== parseInt(index, 10);
        });
        this.setState({ pharmacists : items });
    }

    render() {
        return (
            <div>
                <PharmacistListComponent pharmacists={this.state.pharmacists} history={this.props.history} remove={this.removePharmacist} />
            </div>
        );
    }
}

export default PharmacistList;
