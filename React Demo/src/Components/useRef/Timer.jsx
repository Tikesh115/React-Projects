import React from 'react'
import { useRef, useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        //setInterval s a predefined (built-in) JavaScript method. 
        //It is used to repeatedly call a function
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

  return (
    <div>
        <h1>Timer: {count} seconds</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer