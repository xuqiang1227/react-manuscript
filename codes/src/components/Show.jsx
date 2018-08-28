import React from 'react';
import './Show.css';
import CodeIndex from '../code/index';

export default ({ location, children }) => {
  let {pathname = '/01-01-01'} = location;
  if(pathname === '/') {
    pathname = '/01-01-01';
  }
  const code = require(`../code${pathname}`).default;

  return (
    <React.Fragment>
      <div>
        {code && <CodeIndex code={code} />}
      </div>
      <div className="code-result">
        {children}
      </div>
    </React.Fragment>
  );
}