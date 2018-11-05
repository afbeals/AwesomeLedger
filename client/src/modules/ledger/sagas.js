import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import actions from "./actions";
import api from "../../util/api";
import normalize from "../../util/normalize";
// WATCHERS
export function* watchRequestToFetchLedger() {
  yield takeLatest(actionTypes.FETCH_REQUEST, fetch);
}

// PROMISES
export function* fetch({ payload: { userId } }) {
  try {
    const request = {
        client: {
          id: userId
        }
      },
      response = yield call(api.fetchLedger, { request });
    const users = normalize.arrayToIndexed(response.data);

    yield put(actions.resetLegerStore());
    yield put(actions.fetchLedgerSuccess(users));
  } catch (e) {
    yield put(actions.fetchLedgerFail(e));
  }
}
