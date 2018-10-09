export default `
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

//Form.jsx
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, onSubmit } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(this.state);
      }}>
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, { name: child.props.name,
               onChange: e => this.setState({ [child.props.name]: e.target.value }) })
          })
        }
      </form>
    );
  }
}

export default Form;
`;