import React from 'react';
import {API} from "../../Admin/ApiUrl";
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

const DocPatientComponent = (props) => {
    var {id, name, surname, username, password, personalId, dateOfBirth, doctorUsername} = props;



    var getPatientRecords = (event) => {
        props.history.push("/doctor/patient/" + id);
    };
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{username}</td>
            <td>{password}</td>
            <td>{personalId}</td>
            <td>{dateOfBirth}</td>
            <td>{doctorUsername}</td>
            <td>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getPatientRecords}></span>
            </td>
        </tr>
    );

};

export default DocPatientComponent;

