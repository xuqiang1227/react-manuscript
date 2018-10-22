export default `
import React from 'react';
import './Form.css';

export default class extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { form: {} };
  }

  changeForm(name, value) {
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  render() {
    const { form } = this.state;
    return (
      <React.Fragment>
        <div>
          <label>用户名：</label>
          <input name="username" value={form.username} onChange={e => this.changeForm('username', e.target.value)} />
        </div>
        <div>
          <label>邮箱：</label>
          <input name="email" value={form.email} onChange={e => this.changeForm('email', e.target.value)} />
        </div>
        <div>
          <label>电话：</label>
          <input name="tel" value={form.tel} onChange={e => this.changeForm('tel', e.target.value)} />
        </div>
        <div>
          <label></label>
          <button onClick={() => { alert(JSON.stringify(form)) }}>提交</button>
        </div>
      </React.Fragment>
    );
  }
}
`;