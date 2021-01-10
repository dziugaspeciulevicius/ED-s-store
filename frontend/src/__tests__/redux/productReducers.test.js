import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";

import * as actions from "../../actions/productActions";
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
} from "../../reducers/productReducers";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
} from "../../constants/productConstants";

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

describe("productDetailsReducer", () => {
  it("Should return default state", () => {
    // {} - empty action
    expect(productDetailsReducer(undefined, {})).toEqual({
      product: { reviews: [] },
    });
  });

  it("Should handle PRODUCT_DETAILS_REQUEST", () => {
    expect(
      productListReducer(
        {},
        {
          type: PRODUCT_DETAILS_REQUEST,
          payload: { reviews: [] },
        }
      )
      // expect empty object
    ).toEqual({});
  });

  it("Should handle PRODUCT_DETAILS_SUCCESS", () => {
    expect(
      productDetailsReducer(
        {},
        {
          type: PRODUCT_DETAILS_SUCCESS,
          payload: {
            reviews: [
              {
                _id: "5fc8db2ef910963d0493d33e",
                name: "Sample user",
                rating: 5,
                comment: "really nice shirt",
                user: "5fc8265158a5e98f9c5de0cc",
                createdAt: "2020-12-03T12:33:50.697Z",
                updatedAt: "2020-12-03T12:33:50.697Z",
              },
            ],
          },
        }
      )
    ).toEqual({
      product: {
        reviews: [
          {
            _id: "5fc8db2ef910963d0493d33e",
            name: "Sample user",
            rating: 5,
            comment: "really nice shirt",
            user: "5fc8265158a5e98f9c5de0cc",
            createdAt: "2020-12-03T12:33:50.697Z",
            updatedAt: "2020-12-03T12:33:50.697Z",
          },
        ],
      },
      loading: false,
    });
  });

  it("Should handle PRODUCT_DETAILS_FAIL", () => {
    expect(
      productDetailsReducer(
        {},
        {
          type: PRODUCT_DETAILS_FAIL,
          payload: {
            reviews: [],
          },
        }
      )
    ).toEqual({
      error: {
        reviews: [],
      },
      loading: false,
    });
  });
});

describe("productDeleteReducer", () => {
  it("Should return default state", () => {
    expect(productDeleteReducer(undefined, {})).toEqual({});
  });

  it("Should handle PRODUCT_DELETE_REQUEST", () => {
    expect(
      productDeleteReducer(
        {},
        {
          type: PRODUCT_DELETE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle PRODUCT_DELETE_SUCCESS", () => {
    expect(
      productDeleteReducer(
        {},
        {
          type: PRODUCT_DELETE_SUCCESS,
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      success: true,
    });
  });

  it("Should handle PRODUCT_DELETE_FAIL", () => {
    expect(
      productDeleteReducer(
        {},
        {
          type: PRODUCT_DELETE_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });
});

describe("productCreateReducer", () => {
  it("Should return default state", () => {
    expect(productCreateReducer(undefined, {})).toEqual({});
  });

  it("Should handle PRODUCT_CREATE_REQUEST", () => {
    expect(
      productCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle PRODUCT_CREATE_SUCCESS", () => {
    expect(
      productCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_SUCCESS,
          payload: {},
          loading: false,
          success: true,
        }
      )
    ).toEqual({
      product: {},
      loading: false,
      success: true,
    });
  });

  it("Should handle PRODUCT_CREATE_FAIL", () => {
    expect(
      productCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it("Should handle PRODUCT_CREATE_RESET", () => {
    expect(
      productCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_RESET,
          payload: { product: {} },
        }
      )
    ).toEqual({});
  });
});

describe("productUpdateReducer", () => {
  it("Should return default state", () => {
    expect(productUpdateReducer(undefined, {})).toEqual({ product: {} });
  });

  it("Should handle PRODUCT_UPDATE_REQUEST", () => {
    expect(
      productUpdateReducer(
        {},
        {
          type: PRODUCT_UPDATE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle PRODUCT_UPDATE_SUCCESS", () => {
    expect(
      productUpdateReducer(
        {},
        {
          type: PRODUCT_UPDATE_SUCCESS,
          payload: {},
          loading: false,
          success: true,
        }
      )
    ).toEqual({
      product: {},
      loading: false,
      success: true,
    });
  });

  it("Should handle PRODUCT_UPDATE_FAIL", () => {
    expect(
      productUpdateReducer(
        {},
        {
          type: PRODUCT_UPDATE_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it("Should handle PRODUCT_UPDATE_RESET", () => {
    expect(
      productUpdateReducer(
        {},
        {
          type: PRODUCT_UPDATE_RESET,
          payload: { product: {} },
        }
      )
    ).toEqual({
      product: {},
    });
  });
});

describe("productReviewCreateReducer", () => {
  it("Should return default state", () => {
    expect(productReviewCreateReducer(undefined, {})).toEqual({});
  });

  it("Should handle PRODUCT_CREATE_REVIEW_REQUEST", () => {
    expect(
      productReviewCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_REVIEW_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle PRODUCT_CREATE_REVIEW_SUCCESS", () => {
    expect(
      productReviewCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_REVIEW_SUCCESS,
          loading: false,
          success: true,
        }
      )
    ).toEqual({
      loading: false,
      success: true,
    });
  });

  it("Should handle PRODUCT_CREATE_REVIEW_FAIL", () => {
    expect(
      productReviewCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_REVIEW_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it("Should handle PRODUCT_CREATE_REVIEW_RESET", () => {
    expect(
      productReviewCreateReducer(
        {},
        {
          type: PRODUCT_CREATE_REVIEW_RESET,
          payload: { product: {} },
        }
      )
    ).toEqual({});
  });
});
