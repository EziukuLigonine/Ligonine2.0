import React from 'react';

 const PatientPrescriptionListComponent = (props) => {
  var {id, personalId, duration, tlk, appDesc, vlk, repeated, doctorUsername, date} = props;

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
      </tr>
  );

};

export default PatientPrescriptionListComponent;
