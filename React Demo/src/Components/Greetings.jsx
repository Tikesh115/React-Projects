import React from 'react';

const Greetings = () => {
    const greet = "Hello, World!";
    const date = new Date();
  return (
    <div>
        <h1>{greet}</h1>
        <p>Date : {date.getDate()}</p>
    </div>
  )
}

export default Greetings