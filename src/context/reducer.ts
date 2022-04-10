export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c: any) => c.id !== action.payload.id)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    case 'UPDATE_ITEM_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((obj: any) => {
          if (obj.id === action.payload.id) {
            return {
              ...obj,
              qty: action.payload.qty,
              price: action.payload.price * action.payload.qty
            };
          }
          return obj;
        })
      };
    default:
      return state;
  }
};
