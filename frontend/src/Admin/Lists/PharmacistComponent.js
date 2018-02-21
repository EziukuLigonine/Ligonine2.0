import React from 'react';
import axios from 'axios';
import {API} from '../ApiUrl';

const styles = {
  color: 'red',
  padding: '5px'
}
const green = {
  color: 'green',
  padding: '5px'
}

 const PharmacistComponent = (props) => {
  var {id, name, surname, username, password, companyType, companyName} = props;

  var handleClick = (event) => {
      props.history.push("/pharmacists/" + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete(API + "/api/pharmacists/" + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }
  var getPharmacist = (event) => {
      props.history.push("/admin/pharmacist/" + id);
      event.preventDefault();
  };

  return (
      <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>{password}</td>
      <td>{companyType}</td>
      <td>{companyName}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green} onClick={handleClick}></span>
            <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getPharmacist}></span>
            <span id={id} className="glyphicon glyphicon-trash" aria-hidden="true" style={styles} onClick={handleRemove}></span>
            </td>
      </tr>
  );

};

export default PharmacistComponent;
