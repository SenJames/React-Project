import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [user, setUser] = useState("default name");
  const { name } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.name === name);
    setUser(newPerson.name);
  }, []);
  return (
    <div>
      <h2>{user}</h2>
      <Link to="/people" className="btn">
        Back to List
      </Link>
    </div>
  );
};

export default Person;
