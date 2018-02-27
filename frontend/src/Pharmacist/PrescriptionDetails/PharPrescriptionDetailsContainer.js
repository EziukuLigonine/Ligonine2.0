import React, { Component } from 'react';
import axios from 'axios';
import {API} from "../../Admin/ApiUrl";
import PharPrescriptionDetailsComponent from './PharPrescriptionDetailsComponent';

class PharPrescriptionDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      prescription: {}
    };
    console.log(this.state)
  }
  componentDidMount() {
      axios.get(API + '/api/prescriptions/' + this.props.match.params.id)
          .then((response) => {
              this.setState({
                  prescription: response.data
              });
          })
          .catch((error) => {
              console.log(error);
          });
  }

  render(){
    return(
        <PharPrescriptionDetailsComponent
          prescription={this.state.prescription}
          history={this.props.history}/>
    );
  }

}

export default PharPrescriptionDetailsContainer;
