import React from 'react';


export var RecordAdministrationComponent = (props) => {

    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Paciento asmens kodas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="personalId" placeholder="Paciento asmens kodas" value={props.personalId}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Vizito trukmė</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="duration" placeholder="Trukmė" value={props.duration}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">TLK-10</label>
                <div className="col-sm-3">
                    <input type="text" className='form-control' id="tlk" placeholder="TLK-10" value={props.tlk}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Vizito aprašymas</label>
                <div className="col-sm-3">
                    <input type="textarea" className="form-control" id="appDesc" placeholder="Vizito aprašymas" value={props.appDesc}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">VLK</label>
                <div className="col-sm-3">
                    <select id="vlk" value={props.vlk}
                           onChange={props.onChange}>
                        <option> Kompensuojamas   </option>
                        <option>Nekompensuojamas</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Kartotinas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="repeated" placeholder="Kartotinas" value={props.repeated}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Daktaro slapyvardis</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="doctorUsername" placeholder="Daktaro slapyvardis" value={props.doctorUsername}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Data</label>
                <div className="col-sm-3">
                    <input type="date" className="form-control" id="date" placeholder="Data" value={props.date}
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
