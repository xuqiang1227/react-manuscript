export default `
import React, { useState } from 'react';

const initialState = {
  username: null,
  mobile: null,
  email: null,
  password: null,
  submit: false
}

export default () => {

  const [state, setState] = useState(initialState);

  const onChange = (e, type) => {
    setState({ ...state, [type]: e.target.value });
  }

  return (
    <div className="example-rooter">
      <div>
        <span>用户：</span><input value={state.username} onChange={e => onChange(e, 'username')} />
      </div>
      <div>
        <span>电话：</span><input value={state.mobile} onChange={e => onChange(e, 'mobile')} />
      </div>
      <div>
        <span>邮箱：</span><input value={state.email} onChange={e => onChange(e, 'email')} />
      </div>
      <div>
        <span>密码：</span><input type={'password'} value={state.password} onChange={e => onChange(e, 'password')} />
      </div>
      <div>
        <button onClick={() => setState({ ...state, 'submit': !state.submit })}>提交</button>
      </div>
      {
        state.submit &&
        <React.Fragment>
          <p>您输入的信息是：</p>
          <span>用户名：{state.username}</span>
          <span>电话号码：{state.mobile}</span>
          <span>邮箱：{state.email}</span>
          <span>密码：{state.password}</span>
        </React.Fragment>
      }
    </div>
  );
};
`;