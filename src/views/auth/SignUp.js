import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class SignUp extends Component {

   
    render(){
     
      return (
            <div className="card mb-3">
                  <div className="card-header">Registrar Usuário</div>
                  <div className="card-body">
                    <form >
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputName" className="form-control" placeholder="Nome" required="required"
                                />
                          <label for="inputName">Nome</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="required"
                                name="email" />
                          <label for="inputEmail">Email</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required="required"
                                  name="senha" />
                              <label for="inputPassword">Senha</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="confirmPassword" className="form-control" placeholder="Confirmar senha" required="required"
                                  name="senha" />
                              <label for="confirmPassword">Confirmar Senha</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block">Registar</button>

                    </form>
                    <div className="text-center">
                      <Link className="d-block small mt-3" to="/">Ja tem uma conta? Entrar</Link>
                    </div>
                  </div>
            </div>
      )
    }
}

export default SignUp;
