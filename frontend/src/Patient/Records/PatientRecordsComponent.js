import React from 'react';
import PatientRecordListComponent from "./PatientRecordListComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PatientRecordsComponent = (props) => {
      const records = props.records.map((record, index) => {
        return (
          <PatientRecordListComponent
                key = {index}
                id = {record.id}
                personalId = {record.personalId}
                duration = {record.duration}
                tlk = {record.tlk}
                appDesc = {record.appDesc}
                vlk = {record.vlk}
                doctorUsername = {record.doctorUsername}
                date = {record.date}
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
                            <th>Vizito trukmė</th>
                            <th>TLK-10</th>
                            <th>Aprašymas</th>
                            <th>Kompensuojamas</th>
                            <th>Daktaras</th>
                            <th>Data</th>
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
export default PatientRecordsComponent;
