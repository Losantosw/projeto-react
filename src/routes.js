import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import ForgotPass from "./views/auth/ForgotPass";
import Dashboard from "./views/Dashboard";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/sign-up" component={ SignUp } />
            <Route exact path="/forgot-pass" component={ ForgotPass } />
            <Route exact path="/dashboard" component={ Dashboard } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
