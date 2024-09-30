// src/reducers/pizzaReducer.js
const initialState = {
    pizzas: [],
  };
  
  const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PIZZAS_SUCCESS':
        return { ...state, pizzas: action.payload };
      default:
        return state;
    }
  };
  
  export default pizzaReducer;
  