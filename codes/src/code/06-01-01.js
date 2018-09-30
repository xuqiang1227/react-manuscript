export default `
import React from 'react';
import classNames from 'classnames';
import './List.css';

export default ({ list }) => {
  return (
    <div>
      {
        ((list || []).sort(t => t.turnover)).map((item, index) => {
          const clazz = classNames({
            gold: index === 0,
            silver: index === 1,
            copper: index === 2,
          })
          return (
            <li key={index} className='list'>
              <div><span className={clazz}>{index + 1}</span></div>
              <div>{item.store}</div>
              <div>{item.turnover}</div>
            </li>
          );
        })
      }
    </div>
  );
}
`;