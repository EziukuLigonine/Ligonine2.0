import React, { Component } from 'react';
import axios from 'axios';
import {RecordDetailsComponent} from './RecordDetailsComponent';

export class RecordDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      record: {}
    };

  }
  componentDidMount() {
    axios.get('http://localhost:8081/api/records/' + this.props.match.params.id)
    .then((response) => {
      this.setState({
        record: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };


  render(){
    return(
        <RecordDetailsComponent record={this.state.record} history={this.props.history}/>
    );
  }
}
