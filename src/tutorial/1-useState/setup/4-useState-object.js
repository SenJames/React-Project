import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ id: 1, name: 'john', message: 'We Love React',});
  const changeMsg = () => {
    setPerson({...person,
      message:'Updated Message',})
  }
  return( 
    <React.Fragment>
    
      <h3>useState object example</h3>
      <h3>{person.id}</h3>
      <h3>{person.name}</h3>
      <h3>{person.message}</h3>

      <button type="button" className="btn" onClick={changeMsg}>Change Obj</button>
    </React.Fragment>
  )
};

export default UseStateObject;
