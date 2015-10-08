import React from 'react/addons';
import ReactMixin from 'react-mixin';
import AuthService from '../services/AuthService'

export default class Login extends React.Component {
    constructor(){
        super()
        this.state= {
            user:'',
            password:''
        }
    }

    login(e) {
        e.preventDefault();
        AuthService.login(this.state.user, this.state.password)
            .catch(function(err) {
                alert("There's an error logging in");
                console.log("Error logging in", err);
            });
    }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form role="form">
                <div className="form-group">
                    <input type="text" valueLink={this.linkState('user')}placeholder="Username" />
                    <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login.bind(this)}>Submit</button>
                </form>
            </div>
        );
    }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);