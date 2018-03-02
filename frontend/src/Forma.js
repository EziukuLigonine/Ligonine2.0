import React from 'react';
import './Forma.css';
const Forma = ({username, password, onPassChange, onUsernameChange, onSubmit}, context) => {
  return(
    <div className="loginas">
      <div className="login-panele">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></h3>
          </div>
          <div className="panel-body">
            <form onSubmit={onSubmit}>
              Vartotojo vardas:<br/>
              <input type="text" value={username} onChange={onUsernameChange} />
              Slaptažodis:
              <input type="password" value={password} onChange={onPassChange} />
              <br/>
              <br/>
              <button type="submit" className="btn btn-success">Pirmyn!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Forma;
