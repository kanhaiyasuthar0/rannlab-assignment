import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {};
  return (
    <div>
      <h1>Register</h1>
      <br />

      <input
        onChange={() => setName(e.target.name)}
        type="text"
        placeholder="Enter Your Name Here"
      />

      <br />
      <input
        onChange={() => setName(e.target.name)}
        type="Email"
        placeholder="Enter Your Email Here"
      />

      <br />
      <input type="file" />

      <br />
      <input
        onChange={() => setName(e.target.name)}
        type="password"
        placeholder="Password"
      />

      <br />
      <input
        onChange={() => setName(e.target.name)}
        type="password"
        placeholder="Confirm Password"
      />

      <br />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
