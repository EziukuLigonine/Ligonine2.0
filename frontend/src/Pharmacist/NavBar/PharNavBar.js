import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

class TopNavBar extends Component {

  handleClick= (event) => {
      axios.get('http://localhost:8081/logout')
          .then((response) => {

          })
          .catch((error) => {
              console.log(error);
          });
  };

    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Meniu <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/pharmacist/prescriptions"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Receptai</Link></li>
                                    <li><Link to="/pharmacist/soldPrescriptions"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Parduoti Receptai</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/pharmacist/changePassword">Keisti slaptažodį</Link></li>
                                    <li><Link to="/loginPage?logout" onClick={this.handleClick}>Atsijungti</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNavBar;
