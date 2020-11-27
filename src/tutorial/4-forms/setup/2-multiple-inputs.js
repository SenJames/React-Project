import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    year: "",
  });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.year && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      console.log(person);
      setPeople((people) => {
        return [...people, newPerson];
      });
      setPerson({ firstName: "", email: "", age: "", year: "" });
    } else {
      console.log("empty values");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="year">Year : </label>
            <input
              type="year"
              id="year"
              name="year"
              value={person.year}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age, year } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{year}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
