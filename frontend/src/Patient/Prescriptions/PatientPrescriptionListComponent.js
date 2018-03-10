import React from 'react';

 const PatientPrescriptionListComponent = (props) => {
  var {id, personalId, date, activeMat, activeMatQuantity, unit, desc, validUntil, sold} = props;

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{date}</td>
        <td>{activeMat}</td>
        <td>{activeMatQuantity}</td>
        <td>{unit}</td>
        <td>{desc}</td>
        <td>{validUntil}</td>
      </tr>
  );

};

export default PatientPrescriptionListComponent;
