import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class CreateUser extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('usuarios');
    this.state = {
      nome: '',
      email: '',
      senha: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nome, email, senha } = this.state;

    this.ref.add({
      nome,
      email,
      senha
    }).then((docRef) => {
      this.setState({
        nome: '',
        email: '',
        senha: ''
      });
      this.props.history.push("/dashboard")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
      const { nome, email, senha } = this.state;
      return (
            <div className="card mb-3">
                  <div className="card-header">Registrar Usuário</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputName" className="form-control" placeholder="Nome" required="required"
                                name="nome" value={nome} onChange={this.onChange}/>
                          <label for="inputName">Nome</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="required"
                                name="email" value={email} onChange={this.onChange}/>
                          <label for="inputEmail">Email</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required="required"
                                  name="senha" value={senha} onChange={this.onChange}/>
                              <label for="inputPassword">Senha</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="confirmPassword" className="form-control" placeholder="Confirmar senha" required="required"
                                  name="senha" value={senha} onChange={this.onChange}/>
                              <label for="confirmPassword">Confirmar Senha</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block">Registar</button>

                    </form>
                    <div className="text-center">
                      <Link className="d-block small mt-3" to="/dashboard">Voltar para o Painel</Link>
                    </div>
                  </div>
            </div>
      )
    }
}

export default CreateUser;
