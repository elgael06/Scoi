import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const eventLogin = e => {
    onLogin();
    e.preventDefault();
  };
  return (
    <div style={{height:"100%"}}>
      <strong>This is The Login Page...</strong>
      <h3> login</h3>
      <button onClick={eventLogin} class="btn btn-dark">Login</button>
    </div>
  );
};

export default Login;
