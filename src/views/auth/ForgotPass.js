import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPass extends Component {
    render(){
      return (
        <div classNameName='container'>
              <div className="card card-login mx-auto mt-5">
                  <div className="card-header">Recuperar Senha</div>
                  <div className="card-body">
                    <div className="text-center mb-4">
                      <h4>Esqueceu a senha?</h4>
                      <p>Digite o email para a recuperação de senha.</p>
                    </div>
                    <form>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="email" id="inputEmail" className="form-control" placeholder="Enter email address"
                            required="required" autofocus="autofocus"/>
                          <label for="inputEmail">Digite o email</label>
                        </div>
                      </div>
                      <Link className="btn btn-primary btn-block" to="login.html">Recuperar Senha</Link>
                    </form>

                    <br/>

                    <div className="text-center">
                      <Link classNameName='d-block small' to='/'>Já tem uma conta? Faça o login</Link>
                    </div>
                  </div>
              </div>
        </div>
      )
    }
}

export default ForgotPass;
