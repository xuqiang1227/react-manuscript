import React from 'react';
import Form from './Form';
import './Form.css';

export default class extends React.PureComponent {
  render() {
    return (
      <Form onSubmit={values => {
        alert(JSON.stringify(values))
      }}>
        <label>用户名：</label><input name='username' /><br/>
        <label>邮箱：</label><input name='email' /><br/>
        <label>电话：</label><input name='tel' /><br/>
        <button type="submit">OK</button>
      </Form>
    );
  }
}