import { all } from "redux-saga/effects";
import globalSaga from "pages/Global/globalSaga";

export default function* rootSaga() {
  yield all([
    globalSaga(),
  ]);
}