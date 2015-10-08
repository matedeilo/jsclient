import AppDispatcher from '../core/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../core/RouterContainer';

export default {
    loginUser: (jwt) => {
        var savedJwt = localStorage.getItem('jwt');

        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            jwt: jwt
        });

        if (savedJwt !== jwt) {
            //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
            var nextPath = '/';
            RouterContainer.get().transitionTo(nextPath);
            localStorage.setItem('jwt', jwt);
        }
    },
    logoutUser: () => {
        RouterContainer.get().transitionTo('/login');
        localStorage.removeItem('jwt');
        AppDispatcher.dispatch({
            actionType: LOGOUT_USER
        });
    }
}