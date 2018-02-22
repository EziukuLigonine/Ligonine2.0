import React from 'react';

const AdminDetailsComponent = (props) => {
<<<<<<< HEAD
    const styles = {
        margin: '20px'
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="thumbnail" style={styles}>
                    <img src="/user.png" alt="..." />
                    <div className="caption">
                        <h3>{props.admin.name} {props.admin.surname}</h3>
                        <p>Vartotojo ID: {props.admin.id}</p>
                        <p>Vartotojo vardas: {props.admin.username}</p>
                    </div>
                </div>
            </div>
        </div>
    );
=======
 const styles = {
   margin: '20px'
 }
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="thumbnail" style={styles}>
          <img src="/user.png" alt="..." />
          <div className="caption">
            <h3>{props.admin.name} {props.admin.surname}</h3>
            <p>Vartotojo ID: {props.admin.id}</p>
            <p>Vartotojo vardas: {props.admin.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> frontend
};

export default AdminDetailsComponent;