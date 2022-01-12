import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_CART,
  DECREASE_CART,
} from '../constants';

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = payload => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const incrementCart = payload => {
  return {
    type: INCREASE_CART,
    payload,
  };
};

export const decrementCart = payload => {
  return {
    type: DECREASE_CART,
    payload,
  };
};
