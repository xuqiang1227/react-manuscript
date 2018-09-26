export default `
import React, { PureComponent } from 'react';

const Common = (WrapComponent) => {
  return (
    <div>
      <h1>Title</h1>
      <WrapComponent />
    </div>
  );
}

const Header = () => <div>Header</div>
const Footer = () => <div>Footer</div>

export default class extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <p>Header Component</p>
          {Common(Header)}
        </div>
        <hr />
        <div>
          <p>Footer Component</p>
          {Common(Footer)}
        </div>
      </div>
    );
  }
}
`;