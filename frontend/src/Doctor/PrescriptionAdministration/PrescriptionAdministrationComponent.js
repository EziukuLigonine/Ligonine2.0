import React from 'react';

export var PrescriptionAdministrationComponent = (props) => {

    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Asmens kodas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="personalId" placeholder="Asmens kodas" value={props.personalId}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Data</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="date" placeholder="Data" value={props.date}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Veiklioji medžiada</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="activeMat" placeholder="Veiklioji medžiaga" value={props.activeMat}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Veikliosios medžiagos kiekis</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="activeMatQuantity" placeholder="Veikliosios medžiagos kiekis" value={props.activeMatQuantity}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Vienetai</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="unit" placeholder="Vienetas" value={props.unit}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Aprašymas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="desc" placeholder="Aprašymas" value={props.desc}
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
                <label className="col-sm-2 control-label">Galiojimo data</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="validUntil" placeholder="Galiojimo data" value={props.validUntil}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Išsaugoti</button>
                    <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Atšaukti</button>
                </div>
            </div>
        </form>
    );
};
