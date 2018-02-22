import React from 'react';
import {RecordComponent} from "./RecordComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var RecordListComponent = (props) => {

    const records = props.records.map((record, index) => {
        return (
            <RecordComponent
                key = {index}
                id = {record.id}
                personalId = {record.personalId}
                duration = {record.duration}
                tlk = {record.tlk}
                appDesc = {record.appDesc}
                vlk = {record.vlk}
                repeated = {record.repeated}
                doctorUsername = {record.doctorUsername}
                date = {record.date}
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
                            <th>Duration</th>
                            <th>TLK-10</th>
                            <th>Appointment Description</th>
                            <th>VLK</th>
                            <th>Repeated</th>
                            <th>Doctors Username</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {records}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
