import React from 'react';


const ForgotPass = props => {
    return (
        <div className='container'>
              <div class="card card-login mx-auto mt-5">
                  <div class="card-header">Recuperar Senha</div>
                  <div class="card-body">
                    <div class="text-center mb-4">
                      <h4>Esqueceu a senha?</h4>
                      <p>Digite o email para a recuperação de senha.</p>
                    </div>
                    <form>
                      <div class="form-group">
                        <div class="form-label-group">
                          <input type="email" id="inputEmail" class="form-control" placeholder="Enter email address"
                            required="required" autofocus="autofocus"/>
                          <label for="inputEmail">Digite o email</label>
                        </div>
                      </div>
                      <a class="btn btn-primary btn-block" href="login.html">Recuperar Senha</a>
                    </form>

                    <br/>

                    <div class="text-center">
                      <a className='d-block small' href='/'>Já tem uma conta? Faça o login</a>
                    </div>
                  </div>
              </div>
        </div>
    )
}

export default ForgotPass;
