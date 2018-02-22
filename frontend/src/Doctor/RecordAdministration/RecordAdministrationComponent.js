import React from 'react';

export var RecordAdministrationComponent = (props) => {

    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Personal ID</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="personalId" placeholder="Personal ID" value={props.personalId}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Duration</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="duration" placeholder="Duration" value={props.duration}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">TLK-10</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="tlk" placeholder="TLK-10" value={props.tlk}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Appointment Description</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="appDesc" placeholder="Appointment Description" value={props.appDesc}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">VLK</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="vlk" placeholder="VLK" value={props.vlk}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Repeated</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="repeated" placeholder="Repeated" value={props.repeated}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Doctors Username</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="doctorUsername" placeholder="Doctors Username" value={props.doctorUsername}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Date</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="date" placeholder="Date" value={props.date}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Save</button>
                    <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
        </form>
    );
};
