import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/auth/Login';
import SignUp from './views/auth/SignUp';
import ForgotPass from './views/auth/ForgotPass';
import Dashboard from "./views/Dashboard";

import CreateUser from "./views/user/CreateUser";
import EditUser from "./views/user/EditUser";
import ListUser from "./views/user/ListUser";

import CreateBook from "./views/book/CreateBook";
import EditBook from "./views/book/EditBook";
import ListBook from "./views/book/ListBook";


class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    
                    {/* auth */}
                    <Route exact path="/" component={ Login } />
                    <Route exact path="/sign-up" component={ SignUp } />
                    <Route exact path="/forgot-pass" component={ ForgotPass } />

                    {/* dashboard */}
                    <Route exact path="/dashboard" component={ Dashboard } />
     
                    {/* user */}
                    <Route exact path="/user/create" component={ CreateUser } />
                    <Route exact path="/user/edit/:id" component={ EditUser } />
                    <Route exact path="/user/list" component={ ListUser } /> 

                    {/* book */}
                    <Route exact path="/book/create" component={ CreateBook } />
                    <Route exact path="/book/edit" component={ EditBook } />
                    <Route exact path="/book/list" component={ ListBook } /> 
                                     

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
