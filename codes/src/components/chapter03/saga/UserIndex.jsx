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