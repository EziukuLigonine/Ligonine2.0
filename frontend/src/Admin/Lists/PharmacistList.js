import React, {Component} from 'react';
import PharmacistListComponent from "./PharmacistListComponent";
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PharmacistList extends Component {

    constructor(props) {
        super(props);
        this.state = {pharmacists: [], search: '' };
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
    handleChange = (event) => {
        this.setState({search: event.target.value});
    };

    render() {
        if (this.state.pharmacists === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredPharmacists = this.state.pharmacists.filter((pharmacist) => {
                  return  pharmacist.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || pharmacist.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
            return (
                <div className="row">
                    <form className="navbar-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input className="form-control" placeholder="Ieškoti" type="text" value={this.state.search}
                                   onChange={this.handleChange}/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}><i
                                    className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <PharmacistListComponent pharmacists={filteredPharmacists} history={this.props.history}/>
                    </div>
                </div>
            );
        }
    }
}

export default PharmacistList;
