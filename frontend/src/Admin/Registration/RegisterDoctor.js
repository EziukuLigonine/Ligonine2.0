import React, { Component } from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
import RegisterDoctorComponent from './RegisterDoctorComponent';

class RegisterDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      username: '',
      password: '',
      specialisation: '',
      history: props.history
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
    this.setState({
      [id]: value
    }
  );
};

handleClick = (event) => {
  const outputDoctor = {
    name: this.state.name,
    surname: this.state.surname,
    username: this.state.username,
    password: this.state.password,
    specialisation: this.state.specialisation
  };

  axios.post(API + "/api/admin/doctors/new", outputDoctor)
  .then((response) => {
    this.setState( {
      name: '',
      surname: '',
      username: '',
      password: '',
      specialisation: ''
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
      <RegisterDoctorComponent
        name={this.state.name}
        surname={this.state.surname}
        username={this.state.username}
        password={this.state.password}
        specialisation={this.state.specialisation}
        onChange={this.handleChange}
        onClick={this.handleClick}
        history={this.state.history}
        />
    </div>
  );
}
}

export default RegisterDoctor;
