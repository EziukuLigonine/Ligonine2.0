import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import {PrescriptionListContainer} from "./PrescriptionList/PrescriptionListContainer";
import {RecordAdministrationContainer} from "./RecordAdministration/RecordAdministrationContainer";
import {PrescriptionAdministrationContainer} from "./PrescriptionAdministration/PrescriptionAdministrationContainer";
import {RecordListContainer} from "./RecordList/RecordListContainer";
import {PharPrescriptionDetailsContainer} from "../Pharmacist/PrescriptionDetails/PrescriptionDetailsContainer";
import {RecordDetailsContainer} from "./RecordDetails/RecordDetailsContainer";


class AdminRouter extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/doctor/prescriptions" component={PrescriptionListContainer} />
                    <Route exact path="/doctor/submit/prescription" component={PrescriptionAdministrationContainer} />

                    <Route exact path="/doctor/submit/records" component={RecordAdministrationContainer} />
                    <Route exact path="/doctor/record" component={RecordListContainer} />

                    <Route exact path="/doctor/prescriptions/:id" component={PharPrescriptionDetailsContainer} />
                    <Route exact path="/doctor/records/:id" component={RecordDetailsContainer} />

                </Switch>
            </div>
        );
    }
}

export default AdminRouter;