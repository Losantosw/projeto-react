import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditUser extends Component {
    render(){
      return (
              <div className="card mb-3">
                  <div className="card-header">Editar Usuário</div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputName" className="form-control" placeholder="Nome" required="required"/>
                          <label for="inputName">Nome</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="required"/>
                          <label for="inputEmail">Email</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="inputPassword" className="form-control" placeholder="Senha"
                                required="required"/>
                              <label for="inputPassword">Senha</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="confirmPassword" className="form-control" placeholder="Confirmar senha"
                                required="required"/>
                              <label for="confirmPassword">Confirmar Senha</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="btn btn-primary btn-block" href="login.html">Registrar</a>
                    </form>
                    <div className="text-center">
                      <Link className="d-block small mt-3" to="/dashboard">Voltar para o Painel</Link>
                    </div>
                  </div>
              </div>
      )
    }
}

export default EditUser;
