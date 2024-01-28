import { all } from "redux-saga/effects";

import scheduling from "./modules/scheduling/saga";

export default function* rootSaga() {
  yield all([scheduling]);
}
