import React from 'react';

export var PrescriptionDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.prescription.id}</h3>
      <p>Paciento asmens kodas: {props.prescription.personalId}</p>
      <p>Israsymo data: {props.prescription.date}</p>
      <p>Aktyvioji medziaga: {props.prescription.activeMat}</p>
      <p>Aktyviosios medziagos kiekis: {props.prescription.activeMatQuantity} {props.prescription.unit}</p>
      <p>Aprasymas: {props.prescription.desc}</p>
      <p>Israses daktaras: {props.prescription.doctorUsername}</p>
      <p>Galioja iki: {props.prescription.validUntil}</p>
    </div>
  );
};
