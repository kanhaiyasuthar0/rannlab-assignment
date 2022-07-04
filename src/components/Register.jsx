import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <br />

      <input type="text" placeholder="Enter Your Name Here" />

      <br />
      <input type="Email" placeholder="Enter Your Email Here" />

      <br />
      <input type="file" />

      <br />
      <input type="password" placeholder="Password" />

      <br />
      <input type="password" placeholder="Confirm Password" />

      <br />

      <button>Register</button>
    </div>
  );
};

export default Register;
