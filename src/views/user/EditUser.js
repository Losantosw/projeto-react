import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class EditUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
        key: '',
        nome: '',
        email: '',
        senha: ''
      };
    }

    componentDidMount() {
      const ref = firebase.firestore().collection('usuarios');
      //ref.doc(this.props.match.params.id);
      //const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          const usuario = doc.data();
          this.setState({
            key: doc.id,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha
          });
        } else {
          console.log("No such document!");
        }
      });
    }

    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState({board:state});
    }

    onSubmit = (e) => {
      e.preventDefault();

      const { nome, email, senha } = this.state;

      const updateRef = firebase.firestore().collection('usuarios').doc(this.state.key);
      updateRef.set({
          nome,
          email,
          senha
      }).then((docRef) => {
          this.setState({
            key: '',
            nome: '',
            email: '',
            senha: ''
          });
          this.props.history.push("/user/list/"+this.props.match.params.id)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    }

    render(){
      return (
              <div className="card mb-3">
                  <div className="card-header">Editar Usuário</div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputName" className="form-control" placeholder="Nome"
                             required="required" value={this.state.nome} onChange={this.onChange}/>
                          <label for="inputName">Nome</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="email" id="inputEmail" className="form-control" required="required" placeholder="Email"
                              name="email" value={this.state.email} onChange={this.onChange}/>
                          <label for="inputEmail">Email</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <input type="password" id="inputPassword" className="form-control" required="required" placeholder="Senha"
                                    name="senha" value={this.state.senha} onChange={this.onChange}/>
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
