import React from 'react';

export var PharPrescriptionDetailsComponent = (props) => {

    return (
        <div>
            <h3>#{props.prescription.id}</h3>
            <p>Paciento asmens kodas: {props.prescription.personalId}</p>
            <p>Išrašymo data: {props.prescription.date}</p>
            <p>Aktyvioji medžiaga: {props.prescription.activeMat}</p>
            <p>Aktyviosios medžiagos kiekis: {props.prescription.activeMatQuantity} {props.prescription.unit}</p>
            <p>Aprašymas: {props.prescription.desc}</p>
            <p>Išrašęs daktaras: {props.prescription.doctorUsername}</p>
            <p>Galioja iki: {props.prescription.validUntil}</p>
        </div>
    );
};