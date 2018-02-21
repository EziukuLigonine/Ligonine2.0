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

 const AdminComponent = (props) => {
  var {id, name, surname, username, password} = props;

  var handleClick = (event) => {
      props.history.push("/admins/" + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete(API + "/api/admins/" + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }
  var getAdmin = (event) => {
      props.history.push("/admin/admin/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{username}</td>
        <td>{password}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green} onClick={handleClick}></span>
            <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getAdmin}></span>
            <span id={id} className="glyphicon glyphicon-trash" aria-hidden="true" style={styles} onClick={handleRemove}></span>
            </td>
      </tr>
  );

};

export default AdminComponent;
