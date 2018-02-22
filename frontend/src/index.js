import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminContainer from './Admin/AdminContainer';
import PatientContainer from './Patient/PatientContainer';
import { HashRouter, Route, Switch} from 'react-router-dom';
import PharmacistContainer from "./Pharmacist/PharmacistContainer";
import DoctorContainer from "./Doctor/DoctorContainer";
window.jQuery = $;
require('bootstrap');

ReactDOM.render(
 <HashRouter>
   <Switch>
     <Route exact path="/" name="home" component={App} />
     <Route path="/admin" name="loginToAdmin" component={AdminContainer} />
     <Route path="/patient" name="loginToPatient" component={PatientContainer} />
       <Route path="/pharmacist" name="loginToPharmacist" component={PharmacistContainer} />
       <Route path="/doctor" name="loginToDoctor" component={DoctorContainer} />
   </Switch>
 </HashRouter>
 , document.getElementById('root'));
