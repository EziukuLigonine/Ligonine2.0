import React, { Component } from 'react';
import axios from 'axios';
import {PrescriptionDetailsComponent} from './PrescriptionDetailsComponent';
import {API} from "../../Admin/ApiUrl";

export class PrescriptionDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      prescription: {}
    };

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
        <PrescriptionDetailsComponent prescription={this.state.prescription} history={this.props.history}/>
    );
  }
}
