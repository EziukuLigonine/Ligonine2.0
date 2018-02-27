import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import {PharPrescriptionListContainer} from "./PrescriptionList/PharPrescriptionListContainer";
import PharPrescriptionDetailsContainer from './PrescriptionDetails/PharPrescriptionDetailsContainer';
import PharPrescriptionSold from './Sold/PharPrescriptionSold';



class AdminRouter extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/pharmacist/prescriptions" component={PharPrescriptionListContainer} />
                    <Route path="/pharmacist/prescription/:id" component={PharPrescriptionDetailsContainer} />
                    <Route path="/pharmacist/prescription/:id/confirm" component={PharPrescriptionSold} />

                </Switch>
            </div>
        );
    }
}

export default AdminRouter;
