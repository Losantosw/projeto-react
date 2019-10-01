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
          console.log("Arquivo não existe!");
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
        this.props.history.push("/book/list")
      })
      .catch((error) => {
        console.error("Erro ao atualizar: ", error);
      });
    }


    render(){
      return (
              <div className="card mb-3">
                  <div className="card-header">
                      <h4>
                          <Link to="/dashboard" class="btn btn-primary">Voltar ao Painel</Link>
                      </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputName" className="form-control" placeholder="Nome"
                             required="required" name="title" value={this.state.title} onChange={this.onChange} />
                          <label for="inputName">Nome</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputDescription" className="form-control" placeholder="Descrição"
                             required="required" name="description" value={this.state.description} onChange={this.onChange} />
                          <label for="inputDescription">Descrição</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputAuthor" className="form-control" placeholder="Nome"
                             required="required" name="author" value={this.state.author} onChange={this.onChange} />
                          <label for="inputAuthor">Autor</label>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block" >Atualizar</button>
                    
                    </form>
                  </div>
              </div>
      )
    }
}

export default EditUser;
