import "../../../setupTests";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "../../../reducers/userReducers";
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
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

describe("userUpdateProfileReducer", () => {
  it("Should return default state", () => {
    expect(userUpdateProfileReducer(undefined, {})).toEqual({});
  });

  it("Should handle USER_UPDATE_PROFILE_REQUEST", () => {
    expect(
      userUpdateProfileReducer(
        {},
        {
          type: USER_UPDATE_PROFILE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_UPDATE_PROFILE_SUCCESS", () => {
    expect(
      userUpdateProfileReducer(
        {},
        {
          type: USER_UPDATE_PROFILE_SUCCESS,
          loading: false,
          success: true,
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
      success: true,
      userInfo: {
        _id: "5ffb26ee5c484d61208b676c",
        name: "User Test",
        email: "userTest@gmail.com",
        isAdmin: false,
      },
    });
  });

  it("Should handle USER_UPDATE_PROFILE_FAIL", () => {
    expect(
      userUpdateProfileReducer(
        {},
        {
          type: USER_UPDATE_PROFILE_FAIL,
          payload: "failed to updated the profile",
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      error: "failed to updated the profile",
    });
  });
});

describe("userListReducer", () => {
  it("Should return default state", () => {
    expect(userListReducer(undefined, {})).toEqual({ users: [] });
  });

  it("Should handle USER_LIST_REQUEST", () => {
    expect(
      userListReducer(
        {},
        {
          type: USER_LIST_REQUEST,
          payload: { users: [] },
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_LIST_SUCCESS", () => {
    expect(
      userListReducer(
        {},
        {
          type: USER_LIST_SUCCESS,
          loading: false,
          payload: [
            {
              isAdmin: false,
              _id: "5fc8265158a5e98f9c5de0cc",
              name: "Sample user",
              email: "sample1@gmail.com",
              password:
                "$2a$10$cDZOVGN1gHykWa/GPpWjpu5ZSL/zubYwlYWoC1H27cRJFw/gN7yNa",
              createdAt: "2020-12-02T23:42:09.362Z",
              updatedAt: "2021-01-04T10:41:22.825Z",
            },
            {
              isAdmin: true,
              _id: "5fc8265158a5e98f9c5de0cb",
              name: "Džiugas Pečiulevičius",
              email: "dziugaspeciulevicius@gmail.com",
              password:
                "$2a$10$I4Ing50nF4G3s26pyKrN1.5ov7.Uy3C7L0/V0AJ2l9xutiz7buLW2",
              createdAt: "2020-12-02T23:42:09.361Z",
              updatedAt: "2021-01-10T15:10:24.782Z",
            },
          ],
        }
      )
    ).toEqual({
      loading: false,
      users: [
        {
          isAdmin: false,
          _id: "5fc8265158a5e98f9c5de0cc",
          name: "Sample user",
          email: "sample1@gmail.com",
          password:
            "$2a$10$cDZOVGN1gHykWa/GPpWjpu5ZSL/zubYwlYWoC1H27cRJFw/gN7yNa",
          createdAt: "2020-12-02T23:42:09.362Z",
          updatedAt: "2021-01-04T10:41:22.825Z",
        },
        {
          isAdmin: true,
          _id: "5fc8265158a5e98f9c5de0cb",
          name: "Džiugas Pečiulevičius",
          email: "dziugaspeciulevicius@gmail.com",
          password:
            "$2a$10$I4Ing50nF4G3s26pyKrN1.5ov7.Uy3C7L0/V0AJ2l9xutiz7buLW2",
          createdAt: "2020-12-02T23:42:09.361Z",
          updatedAt: "2021-01-10T15:10:24.782Z",
        },
      ],
    });
  });

  it("Should handle USER_LIST_FAIL", () => {
    expect(
      userListReducer(
        {},
        {
          type: USER_LIST_FAIL,
          loading: false,
          payload: "failed to updated the profile",
        }
      )
    ).toEqual({
      loading: false,
      error: "failed to updated the profile",
    });
  });

  it("Should handle USER_LIST_RESET", () => {
    expect(
      userListReducer(
        {},
        {
          type: USER_LIST_RESET,
          payload: { users: [] },
        }
      )
    ).toEqual({
      users: [],
    });
  });
});

describe("userDeleteReducer", () => {
  it("Should return default state", () => {
    expect(userDeleteReducer(undefined, {})).toEqual({});
  });

  it("Should handle USER_DELETE_REQUEST", () => {
    expect(
      userDeleteReducer(
        {},
        {
          type: USER_DELETE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_DELETE_SUCCESS", () => {
    expect(
      userDeleteReducer(
        {},
        {
          type: USER_DELETE_SUCCESS,
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      success: true,
    });
  });

  it("Should handle USER_DELETE_FAIL", () => {
    expect(
      userDeleteReducer(
        {},
        {
          type: USER_DELETE_FAIL,
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

describe("userUpdateReducer", () => {
  it("Should return default state", () => {
    expect(userUpdateReducer(undefined, {})).toEqual({ user: {} });
  });

  it("Should handle USER_UPDATE_REQUEST", () => {
    expect(
        userUpdateReducer(
        {},
        {
          type: USER_UPDATE_REQUEST,
          loading: true,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("Should handle USER_UPDATE_SUCCESS", () => {
    expect(
        userUpdateReducer(
        {},
        {
          type: USER_UPDATE_SUCCESS,
          loading: false,
          success: true,
        }
      )
    ).toEqual({
      loading: false,
      success: true,
    });
  });

  it("Should handle USER_UPDATE_FAIL", () => {
    expect(
        userUpdateReducer(
        {},
        {
          type: USER_UPDATE_FAIL,
          payload: "failed to load user details",
          loading: false,
        }
      )
    ).toEqual({
      loading: false,
      error: "failed to load user details",
    });
  });

  it("Should handle USER_UPDATE_RESET", () => {
    expect(
        userUpdateReducer(
        {},
        {
          type: USER_UPDATE_RESET,
          payload: { user: {} },
        }
      )
    ).toEqual({ user: {} });
  });
});
