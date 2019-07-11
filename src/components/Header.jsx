import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onLogout }) => {
  return (
    <div>
      <h3>Header</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Users">Users</Link>
        </li>
        <li onClick={onLogout}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
