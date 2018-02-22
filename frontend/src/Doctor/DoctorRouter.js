import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import {PrescriptionListContainer} from "./PrescriptionList/PrescriptionListContainer";
import {RecordAdministrationContainer} from "./RecordAdministration/RecordAdministrationContainer";
import {PrescriptionAdministrationContainer} from "./PrescriptionAdministration/PrescriptionAdministrationContainer";
import {RecordListContainer} from "./RecordList/RecordListContainer";

class AdminRouter extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/doctor/prescription" component={PrescriptionListContainer} />
                    <Route exact path="/doctor/submit/prescription" component={PrescriptionAdministrationContainer} />

                    <Route exact path="/doctor/submit/record" component={RecordAdministrationContainer} />
                    <Route exact path="/doctor/record" component={RecordListContainer} />


                </Switch>
            </div>
        );
    }
}

export default AdminRouter;