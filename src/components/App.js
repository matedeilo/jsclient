'use strict';

import React from 'react';
import LoginStore from '../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = this._getLoginState();
    }

    //getInitialState() {
    //    console.log(LoginStore.isLoggedIn());
    //    return {
    //        userLoggedIn: LoginStore.isLoggedIn()
    //    };
    //}

    _getLoginState() {
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        };
    }

    componentDidMount() {
        this.changeListener = this._onChange.bind(this);
        LoginStore.addChangeListener(this.changeListener);
    }

    _onChange() {
        this.setState(this._getLoginState());
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this.changeListener);
    }

    render() {
        let headerItems;
        if (!this.state.userLoggedIn) {
            headerItems = (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                </ul>)
        } else {
            headerItems = (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <a href="" onClick={this.logout}>Logout</a>
                    </li>
                </ul>)
        }

        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">React Flux app with JWT authentication</a>
                    </div>
                    {headerItems}
                </nav>
                <RouteHandler/>
            </div>
        );
    }

    logout(e) {
        e.preventDefault();
        AuthService.logout();
    }

    //getHeaderItems() {
    //    if (!this.state.userLoggedIn) {
    //        return (
    //            <ul className="nav navbar-nav navbar-right">
    //                <li>
    //                    <Link to="login">Login</Link>
    //                </li>
    //                <li>
    //                    <Link to="signup">Signup</Link>
    //                </li>
    //            </ul>)
    //    } else {
    //        return (
    //            <ul className="nav navbar-nav navbar-right">
    //                <li>
    //                    <Link to="home">Home</Link>
    //                </li>
    //                <li>
    //                    <Link to="quote">Quote</Link>
    //                </li>
    //                <li>
    //                    <a href="" onClick={this.logout}>Logout</a>
    //                </li>
    //            </ul>)
    //    }
    //}
}
