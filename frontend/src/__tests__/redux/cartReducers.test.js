import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";

import * as actions from "../../actions/cartActions";
import { cartReducer } from "../../reducers/cartReducers";
import { CART_ADD_ITEM } from "../../constants/cartConstants";

describe("cartReducer", () => {
  it("Should return default state", () => {
    // {} - empty action
    expect(cartReducer(undefined, {})).toEqual({
      cartItems: [],
      shippingAddress: {},
    });
  });

  //   it("Should handle CART_ADD_ITEM 2", () => {
  //     expect(cartReducer({}, {
  //         type: CART_ADD_ITEM,
  //         cartItems: ["5fc8265158a5e98f9c5de0d5"]
  //     })).toEqual({
  //         cartItems: ["5fc8265158a5e98f9c5de0d5"],
  //         shippingAddress: {}
  //     })
  //   });

  //   it("Should handle CART_ADD_ITEM", () => {
  //     expect(
  //       cartReducer(initialState, {
  //         type: CART_ADD_ITEM,
  //         payload: { cartItems: ["5fc8265158a5e98f9c5de0d5", "5fc8265158a5e98f9c5de0c5"] },
  //       })
  //     ).toEqual({
  //       ...initialState,
  //       cartItems: ["5fc8265158a5e98f9c5de0d5", "5fc8265158a5e98f9c5de0c5"],
  //     });
  //   });
  //   it('Should handle CART_REMOVE_ITEM');
  //   it('Should handle CART_SAVE_SHIPPING_ADDRESS');
  //   it('Should handle CART_SAVE_PAYMENT_METHOD');

  //   it("Should return new state if receiving type", () => {
  //       const item;
  //     const newState = cartReducer(undefined, {
  //       type: types.CART_ADD_ITEM,
  //       payload: item
  //     });
  //     expect(newState).toEqual({
  //       ...newState,
  //       cartItems: [...newState.cartItems, item],
  //     });
  //   });
});
