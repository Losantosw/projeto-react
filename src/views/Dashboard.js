import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

import '../vendor/css/stylesheet.css';
import '../vendor/fontawesome-free/css/all.min.css';

import  CreateUser  from '../views/user/CreateUser';
import  EditUser  from '../views/user/EditUser';
import  ListUser  from '../views/user/ListUser';

import  CreateBook  from '../views/book/CreateBook';
import  EditBook  from '../views/book/EditBook';
import  ListBook  from '../views/book/ListBook';


class Dashboard extends Component {
    render(){
        return (
            <div id="page-top">

                <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
              
                    <Link className="navbar-brand mr-1" to="/dashboard">Projeto DW2</Link>
                
                    <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" to="#">
                      <i className="fas fa-bars"></i>
                    </button>
                
                    {/* <!-- Navbar Search --> */}
                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                
                    {/* <!-- Navbar --> */}
                    <ul className="navbar-nav ml-auto ml-md-0">
                      <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-cog fa-fw"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                          <Link className="dropdown-item" to="/">Logout</Link>
                        </div>
                      </li>
                    </ul>
                
                </nav>
              
                <div id="wrapper">
              
                  {/* <!-- Sidebar --> */}
                  <ul className="sidebar navbar-nav">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-fw fa-home"></i>
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        <li className="nav-item dropdown active">
                          <Link className="nav-link dropdown-toggle" to="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-user"></i>
                            <span>Usuário</span>
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="pagesDropdown">       
                            <Link className="dropdown-item" to="/user/list">Listar</Link>       
                          </div>
                        </li>
                        <li className="nav-item dropdown active">
                          <Link className="nav-link dropdown-toggle" to="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-book"></i>
                            <span>Livro</span>
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="pagesDropdown">   
                            <Link className="dropdown-item" to="/book/list">Listar</Link>    
                          </div>
                        </li>
                  </ul>
              
                  <div id="content-wrapper">
                    <div className="container-fluid"> 
                       <BrowserRouter>
                      
                                <CreateUser/>
                                <EditUser/>
                                <ListUser/>
                                <CreateBook/>
                                <EditBook/>
                                <ListBook/>
                   
                       </BrowserRouter>  
                    </div>
                    {/* <!-- /.container-fluid --> */}
              
                  </div>
                  {/* <!-- /.content-wrapper --> */}
              
                </div>
                {/* <!-- /#wrapper --> */}
              
                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                  <i className="fas fa-angle-up"></i>
                </a>     

                <Helmet>
                    <script src="%PUBLIC_URL%/../vendor/js/code.min.js"></script>
                </Helmet>
          </div>

      );
    }  
}



export default Dashboard;
