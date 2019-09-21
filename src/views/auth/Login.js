import React from 'react';

import '../../vendor/css/stylesheet.css';

const Login = props => {
    return (
          <div className='container'>
              <div className='card card-login mx-auto mt-5'>
                  <div className='card-header'>Autenticação</div>
                  <div className='card-body'>
                      <form>
                          <div className='form-group'>
                            <div className='form-label-group'>
                              <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required='required'
                                autofocus='autofocus'/>
                              <label for='inputEmail'>Email</label>
                            </div>
                          </div>
                          <div className='form-group'>
                            <div className='form-label-group'>
                              <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='required'/>
                              <label for='inputPassword'>Senha</label>
                            </div>
                          </div>
                
                          <a className='btn btn-primary btn-block' href='#'>Login</a>    
                          <a className='btn btn-success btn-block' href='/sign-up'>Registrar</a>
                         
                      </form>
                      <br/>
                      <div className='text-center'>
                          <a className='d-block small' href='/forgot-pass'>Recuperar Senha</a>
                      </div>
                  </div>
              </div>
          </div>
    )
}

export default Login;