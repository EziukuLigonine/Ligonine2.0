import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import PatientPrescriptions from './Prescriptions/PatientPrescriptions';
import PatientRecords from './Records/PatientRecords';
import PatientProfileContainer from './PatientProfile/PatientProfileContainer';


  class PatientRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route path="/patient/prescriptions" component={PatientPrescriptions} />
              <Route path="/patient/records" component={PatientRecords} />
              <Route path="/patient/details" component={PatientProfileContainer} />
            </Switch>
          </div>
        );
      }
    }

  export default PatientRouter;
