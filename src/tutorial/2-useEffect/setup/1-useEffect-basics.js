import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    console.log('use effect started');
    if(value >= 1){
      document.title = `New Message(${value})`;
    }
  }, [value])
  const keepVal = () => {
    setTimeout(() => {
      setValue((preVal)=> preVal + 1)
    }, 2000);
  }
  return(
    <React.Fragment>

      <h2>{value}</h2>
      <button className="btn" onClick={keepVal}>Click Me</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
