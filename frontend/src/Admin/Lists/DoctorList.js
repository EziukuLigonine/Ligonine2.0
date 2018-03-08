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

    removeDoctor = (index) => {
        const items = this.state.doctors.filter((doctor) => {
            return doctor.id !== parseInt(index, 10);
        });
        this.setState({doctors: items});
    }

    render() {
        if (this.state.doctors === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredDoctors = this.state.doctors.filter((doctor) => {
                    doctor.name.indexOf(this.state.search) !== -1 || doctor.surname.indexOf(this.state.search) !== -1;
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
                        <DoctorListComponent doctors={filteredDoctors} history={this.props.history}
                                             remove={this.removePatient}/>
                    </div>
                </div>
            );
        }
    }
}
export default DoctorList;
