import React from 'react';
import PatientComponent from "./PatientComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PatientListComponent = (props) => {
      const patients = props.patients.map((patient, index) => {
        return (
          <PatientComponent
              key = {index}
              id = {patient.id}
              name = {patient.name}
              surname = {patient.surname}
              username = {patient.username}
              password = {patient.password}
              personalId = {patient.personalId}
              dateOfBirth = {patient.dateOfBirth}
              doctorUsername = {patient.doctorUsername}
              history = {props.history}
              remove = {props.remove}
            />
        );
      });
        return(
          <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Vartotojo vardas</th>
                            <th>Slaptažodis</th>
                            <th>Asmens kdoas</th>
                            <th>Gimimo data</th>
                            <th>Daktaro vardas</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {patients}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default PatientListComponent;
