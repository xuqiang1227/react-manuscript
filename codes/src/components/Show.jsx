import React from 'react';
import './Show.css';
import CodeIndex from '../code/index';

export default ({ path, children }) => {
  const code = require(`../code${path}`).default;

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