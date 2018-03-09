import React, {Component} from 'react';
import AdminListComponent from "./AdminListComponent";
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class AdminList extends Component {

    constructor(props) {
        super(props);
        this.state = {admins: [], search: ''};
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
    handleChange = (event) => {
        this.setState({search: event.target.value});
    };
    render() {
        if (this.state.admins === null) {
            return (<div>nieko nėra</div>)
        } else {
            let filteredAdmins = this.state.admins.filter((admin) => {
                return admin.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || admin.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                        <AdminListComponent admins={filteredAdmins} history={this.props.history}/>
                    </div>
                </div>
            );
        }
    }
}

export default AdminList;
