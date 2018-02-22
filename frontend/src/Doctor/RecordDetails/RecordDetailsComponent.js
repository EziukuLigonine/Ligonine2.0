import React from 'react';

export var RecordDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.record.id}</h3>
      <p>Paciento asmens kodas: {props.record.personalId}</p>
      <p>Vizito trukme: {props.record.duration} min.</p>
      <p>TLK-10: {props.record.tlk}</p>
      <p>Vizito aprasymas: {props.record.appDesc}</p>
      <p>VLK: {props.record.vlk}</p>
      <p>Pakartotinis: {props.record.repeated}</p>
      <p>Israses daktaras: {props.record.doctorUsername}</p>
      <p>Iraso data: {props.record.date}</p>
    </div>
  );
};
