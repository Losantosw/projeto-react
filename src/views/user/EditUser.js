import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class EditUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
        key: '',
        title: '',
        description: '',
        author: ''
      };
    }

    componentDidMount() {
      const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          const board = doc.data();
          this.setState({
            key: doc.id,
            title: board.title,
            description: board.description,
            author: board.author
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

      const { title, description, author } = this.state;

      const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
      updateRef.set({
        title,
        description,
        author
      }).then((docRef) => {
        this.setState({
          key: '',
          title: '',
          description: '',
          author: ''
        });
        this.props.history.push("/show/"+this.props.match.params.id)
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
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputName" className="form-control" placeholder="Nome"
                             required="required" name="nome" value={this.state.name} onChange={this.onChange}/>
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

                      <button type="submit" className="btn btn-primary btn-block" href="login.html">Atualizar</button>
                    
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
