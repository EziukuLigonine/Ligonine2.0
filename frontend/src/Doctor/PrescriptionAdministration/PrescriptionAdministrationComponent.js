import React from 'react';

export var PrescriptionAdministrationComponent = (props) => {

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
                <label className="col-sm-2 control-label">Date</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="date" placeholder="Date" value={props.date}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Active Material</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="activeMat" placeholder="Active Material" value={props.activeMat}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Active Material qty.</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="activeMatQuantity" placeholder="Active Material qty." value={props.activeMatQuantity}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Units</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="unit" placeholder="Unit" value={props.unit}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Description</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="desc" placeholder="Description" value={props.desc}
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
                <label className="col-sm-2 control-label">Valid Until</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="validUntil" placeholder="Valid Until" value={props.validUntil}
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
