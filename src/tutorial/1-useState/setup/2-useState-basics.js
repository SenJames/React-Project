import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hey James')
  const handleClick = () => {
    if (text === 'Hey James') {
      setText('useState basic example');
    } else {
      setText('Hey James');
    }
  }
  return (
    <React.Fragment>

      <h2>{text}</h2>
      <button type="button" className='btn' onClick={handleClick}>Change Me</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
