import React, { useEffect, useState } from "react";

const Form = () => {
  //initialize database
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handle input event
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name) {
      setData([...data, user]);
      setUser({ name: "", email: "", password: "" });
    } else {
      alert("please fill the form");
    }
    console.log(user);
  };
  return (
    <div>
      <h2>my first form</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            placeholder={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            placeholder={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
            placeholder={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {data.map((user) => {
        return (
          <div>
            <b>{user.name}</b>
            <b>{user.email}</b>
            <b>{user.password}</b>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
