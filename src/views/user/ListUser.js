import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class ListUser extends Component {
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('usuarios');
      this.unsubscribe = null;
      this.state = {
        usuarios: []
      };
    }

    onCollectionUpdate = (querySnapshot) => {
      const usuarios = [];
      querySnapshot.forEach((doc) => {
        const { nome, email, senha } = doc.data();
        usuarios.push({
            key: doc.id,
            doc, // DocumentSnapshot
            nome,
            email,
            senha,
        });
      });
      this.setState({
        usuarios
    });
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    delete(id){
      firebase.firestore().collection('boards').doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/")
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }

    render(){
      return (
        <div className="card mb-3">
            
            <div className="card-header">
                <Link className="btn btn-info" to={`/user/create`}>
                     Novo Usuário
                </Link>
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Email</th>
                          <th>Senha</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                    
                      <tbody>
                        {this.state.usuarios.map(usuario =>
                            <tr>
                                <td>
                                  {usuario.nome}
                                </td>
                                <td>
                                  {usuario.email}
                                </td>
                                <td>
                                  {usuario.senha}
                                </td>
                                <td>
                                    <Link id="opc" to={`/user/edit/${usuario.key}`}>
                                        <i class="far fa-edit"></i>
                                    </Link>
                                    <Link  >
                                        <i class="fas fa-trash-alt"></i>
                                    </Link>
                                </td>
                            </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
            </div>
            <div className="text-center">
                <Link className="d-block small mt-3" to="/dashboard">Voltar para o Painel</Link>
            </div>
        </div>
      )
    }
}

export default ListUser;
