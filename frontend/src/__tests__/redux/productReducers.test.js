import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";

import * as actions from "../../actions/productActions";
import {
  productListReducer,
  productDetailsReducer,
} from "../../reducers/productReducers";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
} from "../../constants/productConstants";

// import { JsonWebTokenError } from "jsonwebtoken";
// import UserEditPage from "../../pages/UserEditPage.component"
// jest.mock("../../pages/UserEditPage.component");

describe("productListReducer", () => {
  it("Should return default state", () => {
    // {} - empty action
    expect(productListReducer(undefined, {})).toEqual({
      products: [],
    });
  });

  it("Should handle PRODUCT_LIST_REQUEST", () => {
    expect(
      productListReducer(undefined, {
        type: PRODUCT_LIST_REQUEST,
        products: [],
      })
    ).toEqual({
      loading: true,
      products: [],
    });
  });

  //   it("Should handle PRODUCT_LIST_SUCCESS", () => {
  //     expect(
  //       productListReducer(undefined, {
  //         type: PRODUCT_LIST_SUCCESS,
  //         loading: false,
  //         products: [],
  //         pages: 1,
  //         page: 1
  //       })
  //     ).toEqual({
  //       loading: false,
  //       products: ["tea", "chair"],
  //       pages: 1,
  //       page: 1,
  //     });
  //   });

  it("Should handle PRODUCT_LIST_FAIL", () => {
    expect(
      productListReducer(undefined, {
        type: PRODUCT_LIST_FAIL,
        loading: false,
      })
    ).toEqual({
      loading: false,
    });
  });
});

// describe("productDetailsReducer", () => {
//   it("Should return default state", () => {
//     // {} - empty action
//     expect(productDetailsReducer(undefined, {})).toEqual({
//       product: { reviews: [] },
//     });
//   });

//   it("Should handle PRODUCT_LIST_REQUEST", () => {
//     expect(
//       productListReducer(undefined, {
//         type: PRODUCT_DETAILS_REQUEST,
//         loading: true,
//         product: { reviews: [] },
//       })
//     ).toEqual({
//       loading: true,
//       product: { reviews: [] },
//     });
//   });
// });

// describe('productDeleteReducer', () => {

//     it('Should return default state', () => {
//         const newState = productDeleteReducer(undefined, {});
//         expect(newState).toEqual({})
//     });

//     it('Should return new state if receiving type', () => {

//         const newState = productDeleteReducer(undefined, {
//             type: types.PRODUCT_DELETE_REQUEST,
//         })
//         expect(newState).toEqual({});

//     });

// });
