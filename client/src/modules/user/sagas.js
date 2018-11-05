import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import actions from "./actions";
import api from "../../util/api";
import { push } from "connected-react-router";
// WATCHERS
export function* watchRequestToLogin() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, login);
}

// PROMISES
export function* login({ payload: { username, password } }) {
  try {
    const request = {
        client: {
          username,
          password
        }
      },
      response = yield call(api.loginUser, { request });
    yield put(actions.clearUser());
    yield put(actions.loginUserSuccess(response.data));
    yield put(push("/home"));
  } catch (e) {
    yield put(actions.loginUserFail(e));
  }
}
