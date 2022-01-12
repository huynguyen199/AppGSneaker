import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_CART,
  DECREASE_CART,
} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
// import * as actions from '../redux/action/cartAction';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem !== action.payload);

    case DECREASE_CART:
      if (action.payload.amount == 1) {
        return state.filter(cartItem => cartItem !== action.payload);
      }
      let foundState = state.find(cart => cart.id == action.payload.id);
      foundState.amount -= 1;
      const updateDecreaseState = state.map(el =>
        el.id === action.payload.id ? foundState : el,
      );
      return updateDecreaseState;
    case INCREASE_CART:
      let stateObject = state.find(cart => cart.id == action.payload.id);
      stateObject.amount += 1;
      const updateState = state.map(el =>
        el.id === action.payload.id ? stateObject : el,
      );
      return updateState;

    case CLEAR_CART:
      return (state = []);
  }

  return state;
};

export default cartItems;
