import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import {PrescriptionListContainer} from "./PrescriptionList/PrescriptionListContainer";
import {RecordAdministrationContainer} from "./RecordAdministration/RecordAdministrationContainer";
import {PrescriptionAdministrationContainer} from "./PrescriptionAdministration/PrescriptionAdministrationContainer";
import {RecordListContainer} from "./RecordList/RecordListContainer";
import PrescriptionDetailsContainer from "./PrescriptionDetails/PrescriptionDetailsContainer";
import {RecordDetailsContainer} from "./RecordDetails/RecordDetailsContainer";
import PatientList from "./PatientList/PatientList";


class AdminRouter extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/doctor/prescriptions" component={PrescriptionListContainer} />
                    <Route exact path="/doctor/submit/prescription" component={PrescriptionAdministrationContainer} />

                    <Route exact path="/doctor/submit/record" component={RecordAdministrationContainer} />
                    <Route exact path="/doctor/records" component={RecordListContainer} />

                    <Route exact path="/doctor/prescription/:id" component={PrescriptionDetailsContainer} />
                    <Route exact path="/doctor/records/:id" component={RecordDetailsContainer} />

                    <Route exact path="/doctor/patients" component={PatientList} />

                </Switch>
            </div>
        );
    }
}

export default AdminRouter;
