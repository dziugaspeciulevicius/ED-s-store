import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_RESET,
  ORDER_DELIVER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from "../../../constants/orderConstants";
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
} from "../../../reducers/orderReducers";
import "../../../setupTests";

describe("orderCreateReducer", () => {
  it("Should return default state", () => {
    expect(orderCreateReducer({}, {})).toEqual({});
  });

  it("Should handle ORDER_CREATE_REQUEST", () => {
    expect(
      orderCreateReducer(
        {},
        {
          type: ORDER_CREATE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle ORDER_CREATE_SUCCESS", () => {
    expect(
      orderCreateReducer(
        {},
        {
          type: ORDER_CREATE_SUCCESS,
          loading: false,
          success: true,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      success: true,
      order: {},
    });
  });

  it("Should handle ORDER_CREATE_FAIL", () => {
    expect(
      orderCreateReducer(
        {},
        {
          type: ORDER_CREATE_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it("Should handle ORDER_CREATE_RESET", () => {
    expect(
      orderCreateReducer(
        {},
        {
          type: ORDER_CREATE_RESET,
          payload: { order: {} },
        }
      )
    ).toEqual({});
  });
});

describe("orderDetailsReducer", () => {
  it("Should return default state", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual({
      loading: true,
      orderItems: [],
      shippingAddress: {},
    });
  });

  it("Should handle ORDER_DETAILS_REQUEST", () => {
    expect(
      orderDetailsReducer(
        {},
        {
          type: ORDER_DETAILS_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle ORDER_DETAILS_SUCCESS", () => {
    expect(
      orderDetailsReducer(
        {},
        {
          type: ORDER_DETAILS_SUCCESS,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      order: {},
    });
  });

  it("Should handle ORDER_DETAILS_FAIL", () => {
    expect(
      orderDetailsReducer(
        {},
        {
          type: ORDER_DETAILS_FAIL,
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

describe("orderPayReducer", () => {
  it("Should return default state", () => {
    expect(orderPayReducer({}, {})).toEqual({});
  });

  it("Should handle ORDER_PAY_REQUEST", () => {
    expect(
      orderPayReducer(
        {},
        {
          type: ORDER_PAY_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle ORDER_PAY_SUCCESS", () => {
    expect(
      orderPayReducer(
        {},
        {
          type: ORDER_PAY_SUCCESS,
          loading: false,
          success: true,
        }
      )
    ).toEqual({
      loading: false,
      success: true,
    });
  });

  it("Should handle ORDER_PAY_FAIL", () => {
    expect(
      orderPayReducer(
        {},
        {
          type: ORDER_PAY_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it("Should handle ORDER_PAY_RESET", () => {
    expect(
      orderPayReducer(
        {},
        {
          type: ORDER_PAY_RESET,
          payload: { order: {} },
        }
      )
    ).toEqual({});
  });
});

describe("orderDeliverReducer", () => {
  it("Should return default state", () => {
    expect(orderDeliverReducer({}, {})).toEqual({});
  });

  it("Should handle ORDER_DELIVER_REQUEST", () => {
    expect(
      orderDeliverReducer(
        {},
        {
          type: ORDER_DELIVER_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle ORDER_DELIVER_SUCCESS", () => {
    expect(
      orderDeliverReducer(
        {},
        {
          type: ORDER_DELIVER_SUCCESS,
          loading: false,
          success: true,
        }
      )
    ).toEqual({
      loading: false,
      success: true,
    });
  });

  it("Should handle ORDER_DELIVER_FAIL", () => {
    expect(
      orderDeliverReducer(
        {},
        {
          type: ORDER_DELIVER_FAIL,
          loading: false,
          payload: {},
        }
      )
    ).toEqual({
      loading: false,
      error: {},
    });
  });

  it("Should handle ORDER_DELIVER_RESET", () => {
    expect(
      orderDeliverReducer(
        {},
        {
          type: ORDER_DELIVER_RESET,
          payload: { order: {} },
        }
      )
    ).toEqual({});
  });
});

describe("orderListMyReducer", () => {
  it("Should return default state", () => {
    expect(orderListMyReducer(undefined, {})).toEqual({ orders: [] });
  });

  it("Should handle ORDER_LIST_MY_REQUEST", () => {
    expect(
      orderListMyReducer(
        {},
        {
          type: ORDER_LIST_MY_REQUEST,
          payload: { orders: [] },
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle ORDER_LIST_MY_SUCCESS", () => {
    expect(
      orderListMyReducer(
        {},
        {
          type: ORDER_LIST_MY_SUCCESS,
          loading: false,
          payload: [
            {
              _id: "5fd94ed09b586d00046365b4",
              user: "5fc8265158a5e98f9c5de0cb",
              paymentMethod: "Paypal",
              createdAt: "2020-12-16T00:03:28.092Z",
              updatedAt: "2020-12-18T11:53:33.423Z",
              paidAt: "2020-12-16T09:25:53.760Z",
              deliveredAt: "2020-12-18T11:53:33.419Z",
            },
            {
              _id: "5fd9d4b3872b1230706515b8",
              user: "5fc8265158a5e98f9c5de0cb",
              paymentMethod: "Paypal",
              createdAt: "2020-12-16T09:34:43.701Z",
              updatedAt: "2021-01-04T01:33:33.744Z",
              paidAt: "2020-12-16T09:35:23.529Z",
              deliveredAt: "2021-01-04T01:33:33.743Z",
            },
          ],
        }
      )
    ).toEqual({
      loading: false,
      orders: [
        {
          _id: "5fd94ed09b586d00046365b4",
          user: "5fc8265158a5e98f9c5de0cb",
          paymentMethod: "Paypal",
          createdAt: "2020-12-16T00:03:28.092Z",
          updatedAt: "2020-12-18T11:53:33.423Z",
          paidAt: "2020-12-16T09:25:53.760Z",
          deliveredAt: "2020-12-18T11:53:33.419Z",
        },
        {
          _id: "5fd9d4b3872b1230706515b8",
          user: "5fc8265158a5e98f9c5de0cb",
          paymentMethod: "Paypal",
          createdAt: "2020-12-16T09:34:43.701Z",
          updatedAt: "2021-01-04T01:33:33.744Z",
          paidAt: "2020-12-16T09:35:23.529Z",
          deliveredAt: "2021-01-04T01:33:33.743Z",
        },
      ],
    });
  });

  it("Should handle ORDER_LIST_MY_FAIL", () => {
    expect(
      orderListMyReducer(
        {},
        {
          type: ORDER_LIST_MY_FAIL,
          loading: false,
          payload: "failed to list orders",
        }
      )
    ).toEqual({
      loading: false,
      error: "failed to list orders",
    });
  });

  it("Should handle ORDER_LIST_MY_RESET", () => {
    expect(
      orderListMyReducer(
        {},
        {
          type: ORDER_LIST_MY_RESET,
          payload: { orders: [] },
        }
      )
    ).toEqual({
      orders: [],
    });
  });
});


describe("orderListReducer", () => {
  it("Should return default state", () => {
    expect(orderListReducer(undefined, {})).toEqual({ orders: [] });
  });

  it("Should handle ORDER_LIST_REQUEST", () => {
    expect(
      orderListReducer(
        {},
        {
          type: ORDER_LIST_REQUEST,
          payload: { orders: [] },
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle ORDER_LIST_SUCCESS", () => {
    expect(
      orderListReducer(
        {},
        {
          type: ORDER_LIST_SUCCESS,
          loading: false,
          payload: [
            {
              _id: "5fd94ed09b586d00046365b4",
              user: "5fc8265158a5e98f9c5de0cb",
              paymentMethod: "Paypal",
              createdAt: "2020-12-16T00:03:28.092Z",
              updatedAt: "2020-12-18T11:53:33.423Z",
              paidAt: "2020-12-16T09:25:53.760Z",
              deliveredAt: "2020-12-18T11:53:33.419Z",
            },
            {
              _id: "5fd9d4b3872b1230706515b8",
              user: "5fc8265158a5e98f9c5de0cb",
              paymentMethod: "Paypal",
              createdAt: "2020-12-16T09:34:43.701Z",
              updatedAt: "2021-01-04T01:33:33.744Z",
              paidAt: "2020-12-16T09:35:23.529Z",
              deliveredAt: "2021-01-04T01:33:33.743Z",
            },
          ],
        }
      )
    ).toEqual({
      loading: false,
      orders: [
        {
          _id: "5fd94ed09b586d00046365b4",
          user: "5fc8265158a5e98f9c5de0cb",
          paymentMethod: "Paypal",
          createdAt: "2020-12-16T00:03:28.092Z",
          updatedAt: "2020-12-18T11:53:33.423Z",
          paidAt: "2020-12-16T09:25:53.760Z",
          deliveredAt: "2020-12-18T11:53:33.419Z",
        },
        {
          _id: "5fd9d4b3872b1230706515b8",
          user: "5fc8265158a5e98f9c5de0cb",
          paymentMethod: "Paypal",
          createdAt: "2020-12-16T09:34:43.701Z",
          updatedAt: "2021-01-04T01:33:33.744Z",
          paidAt: "2020-12-16T09:35:23.529Z",
          deliveredAt: "2021-01-04T01:33:33.743Z",
        },
      ],
    });
  });

  it("Should handle ORDER_LIST_FAIL", () => {
    expect(
      orderListReducer(
        {},
        {
          type: ORDER_LIST_FAIL,
          loading: false,
          payload: "failed to list orders",
        }
      )
    ).toEqual({
      loading: false,
      error: "failed to list orders",
    });
  });
});
