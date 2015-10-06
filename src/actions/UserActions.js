import AppDispatcher from '../core/Dispatcher.js'
import KeyMirror from '../constants/ActionTypes.js'

const UserActions = {

    login(data){
        AppDispatcher.handleAction({
            actionType: KeyMirror.LOGIN,
            data: data
        })
    }

}
