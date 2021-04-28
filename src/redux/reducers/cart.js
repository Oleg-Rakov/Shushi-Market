export const ADD_POPULAR_ITEM = 'ADD_POPULAR_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const MINUS_VALUE = 'MINUS_VALUE';
export const PLUS_VALUE = 'PLUS_VALUE';

const initialState = {
  items: [],
  cartSum: null,
};

const getDuplicatedItem = (state, action) => {
  return state.items.find((item) => item.id === action.payload.item.id);
};

const getFilteredArray = (state, action) => {
  return state.items.filter((item) => item.id !== action.payload.item.id);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POPULAR_ITEM:
      const duplicatedItem = getDuplicatedItem(state, action);
      const itemPrice = action.payload.item.price;
      if (duplicatedItem) {
        const filteredArray = getFilteredArray(state, action);
        const newItem = {
          ...duplicatedItem,
          count: duplicatedItem.count + 1,
          price: +duplicatedItem.price + +itemPrice,
        };
        return {
          ...state,
          items: [...filteredArray, newItem],
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case REMOVE_CART_ITEM:
      const filteredArray = getFilteredArray(state, action);
      console.log(filteredArray);
      return {
        ...state,
        items: filteredArray,
      };
    case MINUS_VALUE: {
      const duplicatedItem = getDuplicatedItem(state, action);
      if (duplicatedItem) {
        const filteredArray = getFilteredArray(state, action);
        const newTest = {
          ...duplicatedItem,
          count: duplicatedItem.count - 1,
          price:
            +duplicatedItem.price -
            +duplicatedItem.price / duplicatedItem.count,
        };
        if (duplicatedItem.count > 1) {
          return { ...state, items: [...filteredArray, newTest] };
        } else {
          const filteredCount = getFilteredArray(state, action);
          return { ...state, items: filteredCount };
        }
      }
      return {
        ...state,
        items: [...state.items],
      };
    }
    case PLUS_VALUE: {
      const duplicatedItem = getDuplicatedItem(state, action);
      if (duplicatedItem) {
        const filteredArray = getFilteredArray(state, action);
        const newItem = {
          ...duplicatedItem,
          count: duplicatedItem.count + 1,
          price:
            +duplicatedItem.price +
            +duplicatedItem.price / duplicatedItem.count,
        };
        return { ...state, items: [...filteredArray, newItem] };
      }
      return {
        ...state,
        items: [...state.items],
      };
    }
    default:
      return state;
  }
};

export default cart;
