import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0)
  }
  const increase = () => {
    setValue(value + 1)
  }
  const complexAdd = () => {
    console.log(value)
    setTimeout(()=>{
      setValue((preVal) => preVal + 1)
    },
      3000
    )
  }
  return(
    <React.Fragment>
      <section style={{ margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value-1)}>decrease</button>
        <button className="btn" onClick={reset}>reset</button>
        <button className="btn" onClick={increase}>increase</button>
      </section>
      <section style={{ margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexAdd}>increase</button>
      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
