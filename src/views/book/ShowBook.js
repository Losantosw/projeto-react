import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';


class ShowBook extends Component {

    constructor(props) {
      super(props);
      this.state = {
        board: {},
        key: ''
      };
    }

    componentDidMount() {
      const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          this.setState({
            board: doc.data(),
            key: doc.id,
            isLoading: false
          });
        } else {
          console.log("No such document!");
        }
      });
    }

    delete(id){
      firebase.firestore().collection('boards').doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/book/list")
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }

    render(){
      return (
        <div className="card mb-3">
            
            <div className="card-header">
                <h4><Link to="/book/list" class="btn btn-primary">Lista de Livros</Link></h4>
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
                            <tr>
                                <td>{this.state.board.title}</td>
                                <td>{this.state.board.description}</td>
                                <td>{this.state.board.author}</td>
                                <td>
                                    <Link to={`/book/edit/${this.state.key}`} class="btn btn-success">Editar</Link>&nbsp;
                                    <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Apagar</button>
                                </td>
                            </tr>
                      </tbody>
                    </table>
                  </div>
            </div>
        </div>
      )
    }
}

export default ShowBook;
