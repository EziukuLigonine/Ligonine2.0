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
        if (this.state.admins === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredAdmins = this.state.admins.filter((admin) => {
                    admin.name.indexOf(this.state.search) !== -1 || admin.surname.indexOf(this.state.search) !== -1;
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
                        <AdminListComponent admins={filteredAdmins} history={this.props.history}
                                             remove={this.removePatient}/>
                    </div>
                </div>
            );
        }
    }
}

export default AdminList;
