import React from 'react';

 const PatientPrescriptionListComponent = (props) => {
  var {id, personalId, timestamp, activeMat, activeMatQuantity, unit, desc, validUntil} = props;

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{timestamp}</td>
        <td>{activeMat}</td>
        <td>{activeMatQuantity}</td>
        <td>{unit}</td>
        <td>{desc}</td>
        <td>{validUntil}</td>
      </tr>
  );

};

export default PatientPrescriptionListComponent;
