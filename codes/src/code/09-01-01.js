export default `
import React, { useState } from 'react';

export default () => {

  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>You clicked { count } times</p>
      <button onClick={ () => setCount(count + 1) }>
        Click me
      </button>
    </React.Fragment>
  );
};
`;