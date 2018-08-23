import React from 'react';
import './Show.css';
import CodeIndex from '../code/index';

export default ({ path, children }) => {
  return (
    <React.Fragment>
      <div>
        <CodeIndex code={require(`../code${path}`).default} />
      </div>
      <div className="code-result">
        {children}
      </div>
    </React.Fragment>
  );
}