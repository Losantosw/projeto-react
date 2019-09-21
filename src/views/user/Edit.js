import React from 'react';
import '../css/stylesheet.css';

const Edit = props => {
    return (
        <div className='container'>
              <div class="card card-register mx-auto mt-5">
                  <div class="card-header">Editar Usuário</div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <div class="form-label-group">
                          <input type="text" id="inputName" class="form-control" placeholder="Nome" required="required"/>
                          <label for="inputName">Nome</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-label-group">
                          <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="required"/>
                          <label for="inputEmail">Email</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <div class="form-label-group">
                              <input type="password" id="inputPassword" class="form-control" placeholder="Senha"
                                required="required"/>
                              <label for="inputPassword">Senha</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-label-group">
                              <input type="password" id="confirmPassword" class="form-control" placeholder="Confirmar senha"
                                required="required"/>
                              <label for="confirmPassword">Confirmar Senha</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a class="btn btn-primary btn-block" href="login.html">Registrar</a>
                    </form>
                    <div class="text-center">
                      <a class="d-block small mt-3" href="/">Voltar para o Login</a>
                    </div>
                  </div>
              </div>
        </div>
    )
}

export default Edit;
