import React from 'react';

export var RecordDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.record.id}</h3>
      <p>Paciento asmens kodas: {props.record.personalId}</p>
      <p>Vizito trukmė: {props.record.duration} min.</p>
      <p>TLK-10: {props.record.tlk}</p>
      <p>Vizito aprašymas: {props.record.appDesc}</p>
      <p>VLK: {props.record.vlk}</p>
      <p>Pakartotinis: {props.record.repeated}</p>
      <p>Išrašęs daktaras: {props.record.doctorUsername}</p>
      <p>Įrašo data: {props.record.date}</p>
    </div>
  );
};
