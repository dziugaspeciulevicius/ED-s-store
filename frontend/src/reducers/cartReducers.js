import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

// cart reducer takes in initial state which has cartItems which is an array, and we also want to pass an action
export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // if item exists in the cart (we find for each items in currentState items, if they are equal to the currentItem.product)
      const existItem = state.cartItems.find((x) => x.product === item.product);

      // if it exists, we return our state, and then we map through current cart items, and if the current item id is equal to existing item product, 
      // then we're going to return item for this iteration else its going to stay the same
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
        // so if it doesn't exists, we just push it to the array, so we will return our state (whatever there is in our state) and for cart items we're 
        // going to set it to an array with our current items and we're going to add new item.
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
