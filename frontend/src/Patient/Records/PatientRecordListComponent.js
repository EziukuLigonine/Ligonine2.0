import React from 'react';

 const PatientPrescriptionListComponent = (props) => {
  var {id, personalId, duration, tlk, appDesc, vlk, repeated, doctorUsername, date} = props;

  var getPrescription = (event) => {
      props.history.push("/patient/prescription/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{date}</td>
        <td>{tlk}</td>
        <td>{doctorUsername}</td>
        <td>
          <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" onClick={getPrescription}></span>
        </td>
      </tr>
  );

};

export default PatientPrescriptionListComponent;
