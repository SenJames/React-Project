import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    console.log(newPeople)
    setPeople(newPeople)
    // setPeople(people.filter((person)=>person.id !== id))
    // console.log(setPeople(people.filter((person)=>person.id !== id)))
  }
  return( 
    <React.Fragment>
      {
        people.map((person)=> {
          const {id, name} = person
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button className='btn' onClick={()=>removeItem(id)}>Remove Item</button>
            </div>
          )
        })
      }
      <button className='btn' onClick={()=>setPeople([])}>Clear Items</button>
    </React.Fragment>
  );
};

export default UseStateArray;
