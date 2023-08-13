import { all } from "redux-saga/effects";
import globalSaga from "Pages/Global/globalSaga";

export default function* rootSaga() {
  yield all([
    globalSaga(),
  ]);
}