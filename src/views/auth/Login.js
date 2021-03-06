import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component {

    render(){
      return (
          <div className='container'>
              <div className='card card-login mx-auto mt-5'>
                  <div className='card-header'>Autenticação</div>
                  <div className='card-body'>
                      <form >
                          <div className='form-group'>
                            <div className='form-label-group'>
                              <input type='email' id='inputEmail'className='form-control' placeholder='Email address' required='required'
                                autofocus='autofocus' name="email"/>
                              <label for='inputEmail'>Email</label>
                            </div>
                          </div>
                          <div className='form-group'>
                            <div className='form-label-group'>
                              <input type='password' id='inputPassword' ref="password" className='form-control' placeholder='Password' required='required'
                                     name="senha"/>
                              <label for='inputPassword'>Senha</label>
                            </div>
                          </div>
                            
                          <Link type="button"  className='btn btn-primary btn-block' to='/dashboard'>Login</Link>    
                          <Link type="button"  className='btn btn-success btn-block' to='/sign-up'>Registrar</Link> 
                          {/* <Link className='btn btn-success btn-block' to='/sign-up'>Registrar</Link> */}
                         
                      </form>
                      <br/>
                      <div className='text-center'>
                          <Link className='d-block small' to='/forgot-pass'>Recuperar Senha</Link>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}

export default Login;