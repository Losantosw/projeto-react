import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class CreateBook extends Component {

    constructor() {
      super();
      this.ref = firebase.firestore().collection('boards');
      this.state = {
        title: '',
        description: '',
        author: ''
      };
    }
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    onSubmit = (e) => {
      e.preventDefault();

      const { title, description, author } = this.state;

      this.ref.add({
        title,
        description,
        author
      }).then((docRef) => {
        this.setState({
          title: '',
          description: '',
          author: ''
        });
        this.props.history.push("/book/list")
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    }

    render(){

      const { title, description, author } = this.state;
      
      return (
              <div className="card mb-3">
                  <div className="card-header">
                      <h4><Link to="/book/list" class="btn btn-primary">Lista de Livros</Link></h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputTitle" className="form-control" placeholder="Titulo"
                             required="required" name="title" value={title} onChange={this.onChange} />
                          <label for="inputTitle">Titulo</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <textArea type="text" id="inputDescription" className="form-control" placeholder="Descrição"
                             required="required" name="description" onChange={this.onChange} />
                          {/* <label for="inputDescription">Descrição</label> */}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="inputAuthor" className="form-control" placeholder="Nome"
                             required="required" name="author" value={author} onChange={this.onChange} />
                          <label for="inputAuthor">Autor</label>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block" >Adicionar</button>
                    
                    </form>
                  </div>
              </div>
      )
    }
}

export default CreateBook;
