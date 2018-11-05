import { all } from "redux-saga/effects";
import { watchRequestToFetchLedger as fetchLedger } from "./ledger/sagas";
import { watchRequestToLogin as loginUser } from "./user/sagas";

export default function* rootSaga() {
  yield all([fetchLedger(), loginUser()]);
}
