import React from 'react';
import {PrescriptionComponent} from "./PrescriptionComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var PrescriptionListComponent = (props) => {

    const prescriptions = props.prescriptions.map((prescription, index) => {
        return (
            <PrescriptionComponent
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
                history = {props.history}
                remove = {props.remove}
            />
        );
    });

    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Personal ID</th>
                            <th>Date</th>
                            <th>Active Material</th>
                            <th>Active Material qty.</th>
                            <th>Units</th>
                            <th>Description</th>
                            <th>Doctors Username</th>
                            <th>Valid Until</th>
                            <th>Delete</th>
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
