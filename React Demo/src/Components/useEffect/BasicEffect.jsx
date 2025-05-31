import React, { use, useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log("BasicEffect component mounted");
    }, []);
  return (
    <div>
        <h1>Check the conosle to see the message</h1>
    </div>
  )
}

export default BasicEffect