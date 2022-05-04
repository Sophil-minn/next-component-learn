//ClickCounter.js
import React from 'react';
import WithCounter from './WithCounter';

const WithCounterClick = props => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button onClick={incrementCount}>点击{count}次</button>
        </div>
    )
}

export default WithCounter(WithCounterClick, 5)