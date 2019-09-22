import React from 'react';


const ForgotPass = props => {
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
                      <a className="btn btn-primary btn-block" href="login.html">Recuperar Senha</a>
                    </form>

                    <br/>

                    <div className="text-center">
                      <a classNameName='d-block small' href='/'>Já tem uma conta? Faça o login</a>
                    </div>
                  </div>
              </div>
        </div>
    )
}

export default ForgotPass;
