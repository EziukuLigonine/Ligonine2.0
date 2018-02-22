import React from 'react';
import axios from 'axios';
import {RecordAdministrationComponent} from "./RecordAdministrationComponent";

export class RecordAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalId: '',
            duration: '',
            tlk: '',
            appDesc: '',
            vlk: '',
            repeated: '',
            doctorUsername: '',
            date: '',
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [id]: value
            }
        );
    };

    handleClick = (event) => {
        const outputRecord = {
            personalId: this.state.personalId,
            duration: this.state.duration,
            tlk: this.state.tlk,
            appDesc: this.state.appDesc,
            vlk: this.state.vlk,
            repeated: this.state.repeated,
            doctorUsername: this.state.doctorUsername,
            date: this.state.date
        };

        axios.post("http://localhost:8081/api/admin/records/new", outputRecord)
            .then((response) => {
                this.setState( {
                  personalId: '',
                  duration: '',
                  tlk: '',
                  appDesc: '',
                  vlk: '',
                  repeated: '',
                  doctorUsername: '',
                  date: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
            event.preventDefault();
    };

    render() {
        return (
            <div>
                <RecordAdministrationComponent
                    personalId={this.state.personalId}
                    duration={this.state.duration}
                    tlk={this.state.tlk}
                    appDesc={this.state.appDesc}
                    vlk={this.state.vlk}
                    repeated={this.state.repeated}
                    doctorUsername={this.state.doctorUsername}
                    date={this.state.date}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
