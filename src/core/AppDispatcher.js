import { Dispatcher } from 'flux';

//const appDispatcher = new Dispatcher();
//const AppDispatcher = Object.assign(new Dispatcher(), {
//    handleAction(action){
//        this.dispatch({
//            source: 'VIEW_ACTION',
//            action: action
//        })
//    }
//})
//appDispatcher.handleAction = function(action) {
//    this.dispatch({
//        source: 'VIEW_ACTION',
//        action: action
//    });
//}

export default new Dispatcher();

