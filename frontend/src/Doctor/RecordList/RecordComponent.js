import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red',
  padding: '5px'
}
const green = {
  color: 'green',
  padding: '5px'
}

export var RecordComponent = (props) => {
  var {id, personalId, duration, tlk, appDesc, vlk, repeated, date, doctorUsername} = props;

  var handleClick = (event) => {
      props.history.push('/records/' + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete('http://localhost:8081/api/records/' + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }

  var getRecord = (event) => {
      props.history.push("/records/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{duration}</td>
        <td>{tlk}</td>
        <td>{appDesc}</td>
        <td>{vlk}</td>
        <td>{repeated}</td>
        <td>{doctorUsername}</td>
        <td>{date}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green} onClick={handleClick}></span>
            <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getRecord}></span>
            <span id={id} className="glyphicon glyphicon-trash" aria-hidden="true" style={styles} onClick={handleRemove}></span>
            </td>
      </tr>
  );

};
