import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log(firstName, email);
      // This method below can be used to assign the use state values t objec
      // if names of variable is equal to names of key then the next one can
      // be used
      // const indv = { firstName: firstName, email: email };
      // This one below to destructure works
      const indv = { id: new Date().getTime().toString(), firstName, email };
      setPerson((oldPerson) => {
        return [...oldPerson, indv];
      });
      setFirstName("");
      setEmail("");
    } else {
      alert("please enter details");
    }
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {person.map((indv) => {
        const { id, firstName, email } = indv;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
