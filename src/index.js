import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Login from '../src/views/auth/Login';
import SignUp from '../src/views/auth/SignUp';
import ForgotPass from '../src/views/auth/ForgotPass';

import Dashboard from '../src/views/Dashboard';

import CreateBook from '../src/views/book/CreateBook';
import EditBook from '../src/views/book/EditBook';
import ListBook from '../src/views/book/ListBook';
import ShowBook from '../src/views/book/ShowBook';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/forgot-pass' component={ForgotPass} />

        <Route exact path='/dashboard' component={Dashboard} />

        <Route path='/book/create' component={CreateBook} />
        <Route path='/book/edit/:id' component={EditBook} />
        <Route path='/book/show/:id' component={ShowBook} />
        <Route path='/book/list' component={ListBook}/>

      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
