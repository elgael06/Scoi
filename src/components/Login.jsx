import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const eventLogin = e => {
    onLogin();
    e.preventDefault();
  };
  return (
    <div>
      <strong>This is The Login Page...</strong>
      <h3> login</h3>
      <button onClick={eventLogin}>Login</button>
    </div>
  );
};

export default Login;
