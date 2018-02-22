import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import PatientPrescriptions from './Prescriptions/PatientPrescriptions';


  class PatientRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route exact path="/patient/prescriptions" component={PatientPrescriptions} />
            </Switch>
          </div>
        );
      }
    }

  export default PatientRouter;
