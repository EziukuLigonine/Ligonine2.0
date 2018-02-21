import React, { Component } from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
import RegisterPharmacistComponent from './RegisterPharmacistComponent';

class RegisterPharmacist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      username: '',
      password: '',
      companyType: '',
      companyName: '',
      history: props.history
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value
    }
  );
};

handleClick = (event) => {
  const outputPharmacist = {
    name: this.state.name,
    surname: this.state.surname,
    username: this.state.username,
    password: this.state.password,
    companyType: this.state.companyType,
    companyName: this.state.companyName
  };

  axios.post(API + "/api/admin/pharmacists/new", outputPharmacist)
  .then((response) => {
    this.setState( {
      name: '',
      surname: '',
      username: '',
      password: '',
      companyType: '',
      companyName: ''
    });
  })
  .catch((error) => {
    console.log(error);
  });
  event.preventDefault();
};
render(){
  return(
    <div>
    <RegisterPharmacistComponent
    name={this.state.name}
    surname={this.state.surname}
    username={this.state.username}
    password={this.state.password}
    companyType={this.state.companyType}
    companyName={this.state.companyName}
    onChange={this.handleChange}
    onClick={this.handleClick}
    history={this.state.history}
    />
    </div>
  );
}
}

export default RegisterPharmacist;
