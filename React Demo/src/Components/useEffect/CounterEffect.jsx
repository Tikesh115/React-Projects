import React from 'react'
import { useState, useEffect } from 'react';

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            console.log("call useEffect");
            document.title = `Increment: ${count}`;
        }
    }, [count]);
    //The [value] array is called the "dependency array."
    //It tells React to run this useEffect only when the value state changes.
    //This helps avoid unnecessary effect runs and keeps your component efficient.
    
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default CounterEffect