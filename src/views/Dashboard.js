import React from 'react';

import '../vendor/css/stylesheet.css';




const Dashboard = props => {
    return (
       
                <div id="page-top">

                    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

                    <a class="navbar-brand mr-1" href="dashboard.html">Projeto DW2</a>

                    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                        <i class="fas fa-bars"></i>
                    </button>

                    {/* <!-- Navbar Search --> */}
                    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div class="input-group">
                        <input type="text" class="form-control" placeholder="Buscar por..." aria-label="Search" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                            <i class="fas fa-search"></i>
                            </button>
                        </div>
                        </div>
                    </form>

                    {/* <!-- Navbar --> */}
                    <ul class="navbar-nav ml-auto ml-md-0">    
                        <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user-circle fa-fw"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
                        </div>
                        </li>
                    </ul>

                    </nav>

                    <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <ul class="sidebar navbar-nav">
                        <li class="nav-item active">
                        <a class="nav-link" href="dashboard.html">
                            <i class="fas fa-fw fa-home"></i>
                            <span>Inicio</span>
                        </a>
                        </li>
                        <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Usuário</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                            <a class="dropdown-item" href="#">Novo Usuário</a>
                            <a class="dropdown-item" href="#">Editar Usuário</a>
                            <a class="dropdown-item" href="#">Listar Usuários</a>
                        </div>
                        </li>
                        <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Livro</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                            <a class="dropdown-item" href="#">Novo Livro</a>
                            <a class="dropdown-item" href="#">Editar Livro</a>
                            <a class="dropdown-item" href="#">Listar Livros</a>
                        </div>
                        </li>
                    
                    </ul>

                    <div id="content-wrapper">



                    </div>
                    {/* <!-- /.content-wrapper --> */}

                    </div>
                    {/* <!-- /#wrapper --> */}


                    {/* <!-- Bootstrap core JavaScript--> */}
                    <script src="../vendor/jquery/jquery.min.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                </div>
       
    )
}

export default Dashboard;
