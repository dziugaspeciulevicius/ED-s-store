import "../../../setupTests";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "../../../reducers/userReducers";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../../../constants/userConstants";

describe("userLoginReducer", () => {
  it("Should return default state", () => {
    expect(userLoginReducer(undefined, {})).toEqual({});
  });

  it("Should handle USER_LOGIN_REQUEST", () => {
    expect(
      userLoginReducer(
        {},
        {
          type: USER_LOGIN_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_LOGIN_SUCCESS", () => {
    expect(
      userLoginReducer(
        {},
        {
          type: USER_LOGIN_SUCCESS,
          loading: false,
          payload: {
            _id: "5fc8265158a5e98f9c5de0cb",
            name: "Džiugas Pečiulevičius",
            email: "dziugaspeciulevicius@gmail.com",
            isAdmin: true,
          },
        }
      )
    ).toEqual({
      loading: false,
      userInfo: {
        _id: "5fc8265158a5e98f9c5de0cb",
        name: "Džiugas Pečiulevičius",
        email: "dziugaspeciulevicius@gmail.com",
        isAdmin: true,
      },
    });
  });

  it("Should handle USER_LOGIN_FAIL", () => {
    expect(
      userLoginReducer(
        {},
        {
          type: USER_LOGIN_FAIL,
          payload: "login failed",
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      error: "login failed",
    });
  });

  it("Should handle USER_LOGOUT", () => {
    expect(
      userLoginReducer(
        {},
        {
          type: USER_LOGOUT,
          payload: { userInfo: {} },
        }
      )
    ).toEqual({});
  });
});

describe("userRegisterReducer", () => {
  it("Should return default state", () => {
    expect(userRegisterReducer(undefined, {})).toEqual({});
  });

  it("Should handle USER_REGISTER_REQUEST", () => {
    expect(
      userRegisterReducer(
        {},
        {
          type: USER_REGISTER_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_REGISTER_SUCCESS", () => {
    expect(
      userRegisterReducer(
        {},
        {
          type: USER_REGISTER_SUCCESS,
          loading: false,
          payload: {
            _id: "5ffb26ee5c484d61208b676c",
            name: "User Test",
            email: "userTest@gmail.com",
            isAdmin: false,
          },
        }
      )
    ).toEqual({
      loading: false,
      userInfo: {
        _id: "5ffb26ee5c484d61208b676c",
        name: "User Test",
        email: "userTest@gmail.com",
        isAdmin: false,
      },
    });
  });

  it("Should handle USER_REGISTER_FAIL", () => {
    expect(
      userRegisterReducer(
        {},
        {
          type: USER_REGISTER_FAIL,
          payload: "registration failed",
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      error: "registration failed",
    });
  });
});

describe("userDetailsReducer", () => {
  it("Should return default state", () => {
    expect(userDetailsReducer(undefined, {})).toEqual({ user: {} });
  });

  it("Should handle USER_DETAILS_REQUEST", () => {
    expect(
      userDetailsReducer(
        {},
        {
          type: USER_DETAILS_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_DETAILS_SUCCESS", () => {
    expect(
      userDetailsReducer(
        {},
        {
          type: USER_DETAILS_SUCCESS,
          loading: false,
          payload: {
            _id: "5ffb26ee5c484d61208b676c",
            name: "User Test",
            email: "userTest@gmail.com",
            isAdmin: false,
          },
        }
      )
    ).toEqual({
      loading: false,
      user: {
        _id: "5ffb26ee5c484d61208b676c",
        name: "User Test",
        email: "userTest@gmail.com",
        isAdmin: false,
      },
    });
  });

  it("Should handle USER_DETAILS_FAIL", () => {
    expect(
      userDetailsReducer(
        {},
        {
          type: USER_DETAILS_FAIL,
          payload: "failed to load user details",
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      error: "failed to load user details",
    });
  });

  it("Should handle USER_DETAILS_RESET", () => {
    expect(
      userDetailsReducer(
        {},
        {
          type: USER_DETAILS_RESET,
          payload: { user: {} },
        }
      )
    ).toEqual({ user: {} });
  });
});
