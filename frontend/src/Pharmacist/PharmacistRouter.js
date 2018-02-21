import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import {PharPrescriptionListContainer} from "./PrescriptionList/PharPrescriptionListContainer";


class AdminRouter extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/pharmacist/prescriptions" component={PharPrescriptionListContainer} />

                </Switch>
            </div>
        );
    }
}

export default AdminRouter;
