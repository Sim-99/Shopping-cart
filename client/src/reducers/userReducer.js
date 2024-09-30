import { SET_USER, LOGOUT_USER } from '../actions/userActions';

// Initial User State
const initialState = {
  user: null,
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
