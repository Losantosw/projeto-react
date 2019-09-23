import React from 'react';

import '../vendor/css/stylesheet.css';
import '../vendor/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';



const Dashboard = props => {
    return (
        <div id="page-top">

        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
      
          <a className="navbar-brand mr-1" href="/dashboard">Projeto DW2</a>
      
          <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
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
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-cog fa-fw"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal">Logout</a>
              </div>
            </li>
          </ul>
      
        </nav>
      
        <div id="wrapper">
      
          {/* <!-- Sidebar --> */}
          <ul className="sidebar navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/dashboard">
                <i className="fas fa-fw fa-home"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-user"></i>
                <span>Usuário</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">       
                <a className="dropdown-item" href="/user/create">Cadastrar</a>
                <a className="dropdown-item" href="/user/edit">Editar</a>
                <a className="dropdown-item" href="/user/list">Listar</a>       
              </div>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-book"></i>
                <span>Livro</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">   
                <a className="dropdown-item" href="/book/create">Cadastrar</a>
                <a className="dropdown-item" href="/book/edit">Editar</a>
                <a className="dropdown-item" href="/book/list">Listar</a>    
              </div>
            </li>
          </ul>
      
          <div id="content-wrapper">
            <div className="container-fluid">  
      
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



export default Dashboard;
