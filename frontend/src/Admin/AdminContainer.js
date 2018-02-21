import React from 'react';
import TopNavBar from './NavBar/TopNavBar';
import AdminRouter from './AdminRouter';

class Admin extends React.Component {



  render() {
    return (

      <div>
        <TopNavBar />
        <div className="row">
          <div className="col-md-12">
            <AdminRouter />
          </div>
        </div>
      </div>

    );
  }
}


export default Admin;
