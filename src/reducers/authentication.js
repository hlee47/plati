import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  login: {
    status: 'INIT'
  },
  register: {
    status: 'INIT',
    error: -1
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: '',
  }
};

export default function authentication(state, action) {
  if(typeof state === "undefined")
    state = initialState;
  switch(action.type) {
    /* LOGIN */
     case types.AUTH_LOGIN:
       return
     case types.AUTH_LOGIN_SUCCESS:
       return
     case types.AUTH_LOGIN_FAILURE:
       return
      case types.AUTH_REGISTER:
        return
      case types.AUTH_REGISTER_SUCCESS:
        return
      case types.AUTH_REGISTER_FAILURE:
        return
      case types.AUTH_GET_STATUS:
        return
      case types.AUTH_GET_STATUS_SUCCESS:
        return
      case types.AUTH_GET_STATUS_FAILURE:
        return
      case types.AUTH_LOGOUT:
        return 
     default:
       return state;
  }
}
