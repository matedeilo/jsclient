import React from 'react';
import Router, { Route } from 'react-router';
import RouterContainer from './core/RouterContainer';

import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';

let routes = (
    <Route handler={App}>
        <Route name="home" path="/" handler={Home}/>
        <Route name="login" path="/login" handler={Login}/>
    </Route>
);

let router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
    // LoginActions.loginUser(jwt)
}

router.run(function (Handler) {
    React.render(<Handler/>, document.getElementById('content'));
});