import actionTypes from "./actionTypes";

const actions = {
  loginUser: ({ username, password }) => ({
    type: actionTypes.LOGIN_REQUEST,
    payload: {
      username,
      password
    }
  }),
  loginUserFail: msg => ({
    type: actionTypes.LOGIN_FAIL,
    payload: {
      clientMessage: "Failed to fetch users",
      devMessage: msg
    }
  }),
  loginUserSuccess: user => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user
  }),
  logoutUserList: () => ({
    type: actionTypes.LOGOUT_REQUEST
  }),
  logoutUserFail: msg => ({
    type: actionTypes.LOGOUT_FAIL,
    payload: {
      clientMessage: "Failed to fetch users",
      devMessage: msg
    }
  }),
  logoutUserSuccess: userList => ({
    type: actionTypes.LOGOUT_SUCCESS,
    payload: userList
  }),
  clearUser: () => ({
    type: actionTypes.CLEAR
  }),
  resetUserStore: () => ({
    type: actionTypes.RESET
  })
};

export default actions;
