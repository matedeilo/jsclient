import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

    login(username, password) {
        var jwt = "1312313";
        LoginActions.loginUser(jwt);
    }

}

export default new AuthService()