import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return(
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'john Doe'}</h1>
      <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
      <h1>{isError && <h1>Error</h1>}</h1>
    </React.Fragment>
  );
};

export default ShortCircuit;
