import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ListUser extends Component {
    render(){
      return (
        <div className="card mb-3">
            
            <div className="card-header">
                <i className="fas fa-table"></i>
                Data Table Example
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                        </tr>
                      </thead>
                    
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
            </div>
            <div className="text-center">
                <Link className="d-block small mt-3" to="/dashboard">Voltar para o Painel</Link>
            </div>
        </div>
      )
    }
}

export default ListUser;
