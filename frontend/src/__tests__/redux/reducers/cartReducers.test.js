import "../../../setupTests";
import { cartReducer } from "../../../reducers/cartReducers";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../../../constants/cartConstants";

describe("cartReducer", () => {
  it("Should return default state", () => {
    // {} - empty action
    expect(cartReducer(undefined, {})).toEqual({
      cartItems: [],
      shippingAddress: {},
    });
  });

  // it("Should handle CART_ADD_ITEM", () => {
  //   expect(
  //     cartReducer(
  //       {},
  //       {
  //         type: CART_ADD_ITEM,
  //       }
  //     )
  //   ).toEqual({});
  // });

  // it("Should handle CART_REMOVE_ITEM", () => {
  //   expect(
  //     cartReducer(
  //       {},
  //       {
  //         type: CART_REMOVE_ITEM,
  //       }
  //     )
  //   ).toEqual({});
  // });

  it("Should handle CART_SAVE_SHIPPING_ADDRESS", () => {
    expect(
      cartReducer(
        {},
        {
          type: CART_SAVE_SHIPPING_ADDRESS,
          payload: {},
        }
      )
    ).toEqual({
      shippingAddress: {},
    });
  });

  it("Should handle CART_SAVE_PAYMENT_METHOD", () => {
    expect(
      cartReducer(
        {},
        {
          type: CART_SAVE_PAYMENT_METHOD,
          payload: {},
        }
      )
    ).toEqual({
      paymentMethod: {},
    });
  });
});
