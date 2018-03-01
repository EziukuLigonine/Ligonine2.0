import React, {Component} from 'react';
import Forma from './Forma';
import axios from 'axios';
axios.defaults.withCredentials = true;

class FormaContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      role: ''
    };
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onPassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = (event) => {
    let userData = new URLSearchParams();
    userData.append('username', this.state.username);
    userData.append('password', this.state.password);
    axios.post('http://localhost:8081/login', userData,
      {headers:{'Content-type':'application/x-www-form-urlencoded'}})
      .then((response) => {
        axios.get('http://localhost:8081/api/userRole/')
        .then((response) => {
          this.setState({
            role: response.data,

          });
          if(this.state.role === 'Admin') {
            this.props.history.push("/admin");
            event.preventDefault();
          } if(this.state.role === "Doctor"){
            this.props.history.push("/doctor");
            event.preventDefault();
          } if(this.state.role === "Patient"){
            this.props.history.push("/patient");
            event.preventDefault();
          } if(this.state.role === "Pharmacist"){
            this.props.history.push("/pharmacist");
            event.preventDefault();
          };
        })
      })
      .catch((e) => {
        alert("Tokio vartotojo nera");
        console.log(e);
      });
      event.preventDefault();
  }

  render(){
    return(
      <Forma
            username={this.state.username}
            password={this.state.password}
            onUsernameChange={this.onUsernameChange}
            onPassChange={this.onPassChange}
            onSubmit={this.onSubmit}
            />
    );
  }

}

export default FormaContainer;
