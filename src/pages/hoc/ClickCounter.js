import React, { useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () =>{
        setCount(prevoiusCount => prevoiusCount + 1 )
    }
    return (
        <div>
            <button onClick={incrementCount}>点击{count}次</button>
        </div>
    )
}

export default ClickCounter