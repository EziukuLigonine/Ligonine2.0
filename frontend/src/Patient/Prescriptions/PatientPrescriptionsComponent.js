import React from 'react';
import PatientPrescriptionListComponent from "./PatientPrescriptionListComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PatientPrescriptionsComponent = (props) => {
      const prescriptions = props.prescriptions.map((prescription, index) => {
        return (
          <PatientPrescriptionListComponent
                key = {index}
                id = {prescription.id}
                personalId = {prescription.personalId}
                date = {prescription.date}
                activeMat = {prescription.activeMat}
                activeMatQuantity = {prescription.activeMatQuantity}
                unit = {prescription.unit}
                desc = {prescription.desc}
                doctorUsername = {prescription.doctorUsername}
                validUntil = {prescription.validUntil}
                sold = {prescription.sold}
                history = {props.history}
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
                            <th>Asmens kodas</th>
                            <th>Data</th>
                            <th>Aktyvioji medžiaga</th>
                            <th>Kiekis</th>
                            <th>Matavimo vnt</th>
                            <th>Aprašymas</th>
                            <th>Išrašė</th>
                            <th>Galioja iki</th>
                            <th>Galiojimas</th>
                        </tr>
                    </thead>
                    <tbody>
                    {prescriptions}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default PatientPrescriptionsComponent;
