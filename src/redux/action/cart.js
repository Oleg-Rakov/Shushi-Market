import {
  ADD_POPULAR_ITEM,
  MINUS_VALUE,
  PLUS_VALUE,
  REMOVE_CART_ITEM,
} from '../reducers/cart';

export const addPopularItem = (item) => ({
  type: ADD_POPULAR_ITEM,
  payload: { item },
});

export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: {
    item,
  },
});

export const minusValue = (item) => ({
  type: MINUS_VALUE,
  payload: {
    item,
  },
});

export const plusValue = (item) => ({
  type: PLUS_VALUE,
  payload: {
    item,
  },
});
