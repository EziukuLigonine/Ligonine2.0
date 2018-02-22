import React from 'react';
import { Link } from 'react-router-dom';

const green = {
  color: 'green',
  padding: '5px'
}

 const AssignComponent = (props) => {
  var {id, name, surname, username, specialisation, patient} = props;

  return (
      <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>{specialisation}</td>
          <td>

            <Link to={{ pathname: `/admin/patient/confirm/${patient}`, state: { doctorUsernameObject: {username}} }}><span className="glyphicon glyphicon-transfer" aria-hidden="true" style={green}></span></Link>
          </td>

      </tr>
  );

};

export default AssignComponent;
