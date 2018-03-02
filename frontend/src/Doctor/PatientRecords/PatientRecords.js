import React, {Component} from 'react';
import axios from 'axios';
import {RecordListComponent} from "../RecordList/RecordListComponent";
import {DocPatientList} from "../PatientList/PatientList";

export class PatientRecords extends Component {

    constructor(props) {
        super(props);
        this.state = {records: []};
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:8081/api/patients/'+ this.props.match.params.id + '/records')
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
        this.setState({records: items});
    }

    render() {
        console.log(this.props.match.params.id);
        if (this.state.records === null) {
            return (<div>nieko nera</div>)
        } else {
            console.log(this.state.records);
            return (
                <div>
                    <RecordListComponent records={this.state.records} history={this.props.history}
                                         remove={this.removeRecord}/>
                </div>
            );
        }
    }
}


