export default `
//ui.jsx
import React from 'react';
import { USER_FETCH_REQUESTED } from '../../../actions/User';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userId: '297ee83e-4d15-4eb7-8106-e1e5e212933c' }
  }

  render() {
    const { userInfo = {}, dispatch } = this.props;
    return (
      <React.Fragment>
        <button onClick={() => {
          dispatch({ type: USER_FETCH_REQUESTED, payload: { userId: this.state.userId } });
        }}>Get User Info</button>  <span>用户名： {userInfo.username}</span>
      </React.Fragment>
    );
  }
}

//saga.js
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

const userSaga = function* () {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default userSaga;

//store.js
import createSagaMiddleware from 'redux-saga';
import Sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(Sagas)

//reducer.js
import { USER_FETCH_SUCCEEDED } from '../actions/User';

const initialState = { user: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
`;