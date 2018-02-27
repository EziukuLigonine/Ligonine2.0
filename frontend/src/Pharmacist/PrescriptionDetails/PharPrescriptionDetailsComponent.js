import {Link} from 'react-router-dom';
import React, { Component } from 'react';

  class PharPrescriptionDetailsComponent extends Component {

    constructor(props){
      super(props);

      this.state = {
      };
    }
      render(){

        let someText = null;
        if(this.props.prescription.sold) {
          someText = <p>Receptas panaudotas</p>;
        } else {
          someText = <p><Link to={`/pharmacist/prescription/${this.props.prescription.id}/confirm`}><button type="submit" className="btn btn-success">Panaudoti</button></Link></p>;
        }

        return(
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Receptas #{this.props.prescription.id}</h3>
            </div>
            <div className="panel-body">
              <p>Paciento asmens kodas: {this.props.prescription.personalId}</p>
              <p>Israsymo data: {this.props.prescription.date}</p>
              <p>Aktyvioji medziaga: {this.props.prescription.activeMat}</p>
              <p>Aktyviosios medziagos kiekis: {this.props.prescription.activeMatQuantity} {this.props.prescription.unit}</p>
              <p>Aprasymas: {this.props.prescription.desc}</p>
              <p>Israses daktaras: {this.props.prescription.doctorUsername}</p>
              <p>Galioja iki: {this.props.prescription.validUntil}</p>
              {someText}
            </div>
          </div>
        );
      }
    }




export default PharPrescriptionDetailsComponent;
