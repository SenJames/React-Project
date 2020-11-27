import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((resp)=>{
        if(resp.status >= 200 && resp.status <= 299){
          return resp.json()
        }
        else{
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user)=> {
        const {login} = user;
        setUser(login)
        setLoading(false)
      })
      .catch((error)=> console.log(error));
    // return () => {
    //   cleanup
    // }
  }, [])
  if(isLoading){
    return( <div> <h3>loading...</h3></div>)
  }
  
  if(isError){
    return( <div> <h3>error...</h3></div>)
  }

  return( 
    <h2>{user}</h2>
      )
  ;
};

export default MultipleReturns;
