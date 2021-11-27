import * as productConstants from "../constants/productConstants";

// in the initial state we want to add products and set it to empty array.
export const productListReducer = (
  state = { products: [] },
  //TODO: create models for products and so on
  action: { type: any; payload: { products: any; pages: any; page: any } }
) => {
  // we want to evaluate the type in the action so we use switch for that
  switch (action.type) {
    case productConstants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case productConstants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case productConstants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case productConstants.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case productConstants.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case productConstants.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (
  state = {},
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case productConstants.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case productConstants.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case productConstants.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (
  state = {},
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case productConstants.PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case productConstants.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case productConstants.PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case productConstants.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (
  state = { product: {} },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case productConstants.PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case productConstants.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case productConstants.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case productConstants.PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (
  state = {},
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case productConstants.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case productConstants.PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case productConstants.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case productConstants.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
