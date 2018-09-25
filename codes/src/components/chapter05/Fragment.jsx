import React from 'react';

export default class extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>
          <label>姓名：</label> <input />
        </div>
        <div>
          <label>年龄：</label> <input />
        </div>
      </React.Fragment>
    );
  }
}