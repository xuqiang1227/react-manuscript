import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchUserApi } from '../api/user';
import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from '../actions/User';

function* fetchUser({ payload }) {
  try {
    const user = yield call(fetchUserApi, payload.userId);
    yield put({ type: USER_FETCH_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: USER_FETCH_FAILED, message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
const userSaga = function* () {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default userSaga;