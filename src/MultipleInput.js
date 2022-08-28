import { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: ""
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, age } = person;

    if (name && email && age) {
      const newPerson = { ...person, id: new Date().getTime() };

      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add Person</button>
        </form>

        {people.map((person) => {
          const { name, email, age, id } = person;

          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <h4>{email}</h4>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
