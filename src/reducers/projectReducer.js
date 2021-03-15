const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return { ...state, authError: null };

    case 'SIGNUP_ERROR':
      return { ...state, authError: action.errorMessage };

    case 'LOGIN_SUCCESS':
      return { ...state, authError: null };

    case 'LOGIN_ERROR':
      return { ...state, authError: action.errorMessage };
    case 'SIGNOUT_SUCCESS':
      return state;

    case 'MESSAGE_SUCCESS':
      return state;

    case 'MESSAGE_DELETE_SUCCESS':
      return { ...state, messageInfo: `Success delete ${action.result}` };

    case 'MESSAGE_ERROR':
      return { ...state, messageError: action.errorMessage };
    case 'ADMIN_ADD_SUCCESS':
      return { ...state, messageAdmin: action.successMessage };
    case 'ADMIN_ADD_ERROR':
      return { ...state, messageAdmin: action.errorMessage };

    default:
      return state;
  }
};

export default projectReducer;
