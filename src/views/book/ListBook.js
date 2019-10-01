import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class ListBook extends Component {
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('boards');
      this.unsubscribe = null;
      this.state = {
        boards: []
      };
    }

    onCollectionUpdate = (querySnapshot) => {
      const boards = [];
      querySnapshot.forEach((doc) => {
        const { title, description, author } = doc.data();
        boards.push({
          key: doc.id,
          doc, // DocumentSnapshot
          title,
          description,
          author,
        });
      });
      this.setState({
        boards
    });
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render(){
      return (
        
        <div className="card mb-3">
            
            <div className="card-header">
                <h4>
                    <Link to="/book/create" id="espLink" class="btn btn-primary">Novo Livro</Link>
                    <Link to="/dashboard" class="btn btn-primary">Voltar ao Painel</Link>
                </h4>
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Titulo</th>
                          <th>Descrição</th>
                          <th>Autor</th>
                          <th></th>
                        </tr>
                      </thead>
                    
                      <tbody>
                          {this.state.boards.map(board =>
                              <tr>
                                <td>{board.title}</td>
                                <td>{board.description}</td>
                                <td>{board.author}</td>
                                <td>
                                    <Link to={`/book/show/${board.key}`}>Opções</Link>
                                </td>
                              </tr>
                          )}
                      </tbody>
                    </table>
                  </div>
            </div>
        </div>
      )
    }
}

export default ListBook;
