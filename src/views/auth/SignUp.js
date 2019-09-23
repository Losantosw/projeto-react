import React from 'react';


const SignUp = props => {
    return (
        <div classNameName='container'>
              <div className="card card-register mx-auto mt-5">
                  <div className="card-header">Registrar Usuário</div>
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
                      <a className="d-block small mt-3" href="/">Voltar para o Login</a>
                    </div>
                  </div>
              </div>
        </div>
    )
}

export default SignUp;