import React from 'react';
import './Show.css';
import CodeIndex from '../code/index';

export default ({ path, children }) => {
  const code = require(`../code${path}`).default;
  if(!code) {
    return null;
  }
  return (
    <React.Fragment>
      <div>
        <CodeIndex code={code} />
      </div>
      <div className="code-result">
        {children}
      </div>
    </React.Fragment>
  );
}