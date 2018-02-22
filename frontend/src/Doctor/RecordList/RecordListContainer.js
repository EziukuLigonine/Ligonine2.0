import React, {Component} from 'react';
import axios from 'axios';
import {RecordListComponent} from "./RecordListComponent";

export class RecordListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {records: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/records')
            .then((response) => {
                this.setState({records: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    removeRecord = (index) => {
        const items = this.state.records.filter((record) => {
          return record.id !== parseInt(index, 10);
        });
        this.setState({ records : items });
    }

    render() {
        return (
            <div>
                <RecordListComponent records={this.state.records} history={this.props.history} remove={this.removeRecord} />
            </div>
        );
    }
}
