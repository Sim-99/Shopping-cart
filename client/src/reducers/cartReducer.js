import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions/cartActions';

// Initial Cart State
const initialState = {
  items: [],
};

// Cart Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
