import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import ForgotPass from "./views/ForgotPass";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/sign-up" component={ SignUp } />
            <Route exact path="/forgot-pass" component={ ForgotPass } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
