import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const styles = {
    color: 'red',
    padding: '5px'
}
const green = {
    color: 'green',
    padding: '5px'
}

export var PrescriptionComponent = (props) => {
    var {id, personalId, date, activeMat, activeMatQuantity, unit, desc, validUntil, timestamp} = props;

    var handleClick = (event) => {
        props.history.push('/prescriptions/' + id);
        event.preventDefault();
    };


    var getPrescription = (event) => {
        props.history.push("/doctor/prescription/" + id);
        event.preventDefault();
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{personalId}</td>
            <td>{activeMat}</td>
            <td>{activeMatQuantity}</td>
            <td>{unit}</td>
            <td>{desc}</td>
            <td>{validUntil}</td>
            <td>{timestamp}</td>
            <td>
                <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green}
                      onClick={handleClick}></span>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                      onClick={getPrescription}></span>
            </td>
        </tr>
    );

};
