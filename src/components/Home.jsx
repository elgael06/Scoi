import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Users from "./Private/Users";

const Home = () => {
  return (
    <div>
      <strong>This is The Home Page...</strong>
      <Route path={"/Users"} component={Users} />
    </div>
  );
};

export default Home;
