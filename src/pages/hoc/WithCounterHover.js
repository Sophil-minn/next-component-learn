//ClickCounter.js
import React from 'react';
import WithCounter from './WithCounter';

const WithCounterHover = props => {
    const { count, incrementCount } = props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>悬停{count}次</h2>
      </div>
    )
}

export default WithCounter(WithCounterHover, 2)