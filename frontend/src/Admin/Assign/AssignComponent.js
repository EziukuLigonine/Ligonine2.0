import React from 'react';
import axios from 'axios';
import {API} from '../ApiUrl';
import RegisterPatientComponent from '../Registration/RegisterPatientComponent';


const green = {
  color: 'green',
  padding: '5px'
}

 const AssignComponent = (props) => {
  var {id, name, surname, username, password, specialisation, patient} = props;

  var handleClick = (event) => {
      props.history.push("/admin/patient/edit/" + patient);
      event.preventDefault();
      console.log(username);
      console.log(patient);
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete(API + "/api/doctors/" + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }
  var getDoctor = (event) => {
      props.history.push("/admin/doctor/" + id);
      event.preventDefault();
  };

  return (
      <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>{password}</td>
      <td>{specialisation}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-random" aria-hidden="true" style={green} onClick={handleClick}></span>
            </td>

      </tr>
  );

};

export default AssignComponent;
