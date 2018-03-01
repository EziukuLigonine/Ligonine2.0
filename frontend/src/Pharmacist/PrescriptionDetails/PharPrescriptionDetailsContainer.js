import React, { Component } from 'react';
import {API} from "../../Admin/ApiUrl";
import PharPrescriptionDetailsComponent from './PharPrescriptionDetailsComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PharPrescriptionDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      personalId: '',
      date: '',
      activeMat: '',
      activeMatQuantity: '',
      unit: '',
      desc: '',
      doctorUsername: '',
      validUntil: '',
      sold: ''

    };
  }
  componentDidMount() {
      axios.get(API + '/api/prescriptions/' + this.props.match.params.id)
          .then((response) => {
            const {id, personalId, date, activeMat, activeMatQuantity, unit, desc, doctorUsername, validUntil, sold} = response.data;
              this.setState({
                id: id,
                personalId: personalId,
                date: date,
                activeMat: activeMat,
                activeMatQuantity: activeMatQuantity,
                unit: unit,
                desc: desc,
                doctorUsername: doctorUsername,
                validUntil: validUntil,
                sold: sold
              });
          })
          .catch((error) => {
              console.log(error);
          });
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
      const outputPrescription = {
        id: this.state.id,
        personalId: this.state.personalId,
        date: this.state.date,
        activeMat: this.state.activeMat,
        activeMatQuantity: this.state.activeMatQuantity,
        unit: this.state.unit,
        desc: this.state.desc,
        doctorUsername: this.state.doctorUsername,
        validUntil: this.state.validUntil,
        sold: !this.state.sold
      };
      axios.put(API + "/api/prescriptions/" + this.props.match.params.id, outputPrescription)
          .then((response) => {
            alert("Receptas panaudotas!");
            this.props.history.push("/pharmacist/prescriptions");
          })
          .catch((error) => {
            alert("Nepavyko! Blogai įvesti duomenys");
              console.log(error);
          });
      event.preventDefault();
  };

  render(){
    return(
        <PharPrescriptionDetailsComponent
          id={this.state.id}
          personalId={this.state.personalId}
          date={this.state.date}
          activeMat={this.state.activeMat}
          activeMatQuantity={this.state.activeMatQuantity}
          unit={this.state.unit}
          desc={this.state.desc}
          doctorUsername={this.state.doctorUsername}
          validUntil={this.state.validUntil}
          sold={this.state.sold}
          onChange={this.handleChange}
          onClick={this.handleClick}
          history={this.state.history}/>
    );
  }

}

export default PharPrescriptionDetailsContainer;
