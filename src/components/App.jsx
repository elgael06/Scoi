import React, { useState } from "react"; //Importamos react
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Header from "./Header";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
const App = () => {
  const [autenticate, setAut] = useState(fakeAuth.isAuthenticated);

  const onLogin = () => {
    fakeAuth.authenticate(setAut(true));
  };
  const onLogout = () => {
    fakeAuth.signout(setAut(false));
  };
  const AppHome = () => (autenticate ? <Home /> : <h3>You Are Logout !!!</h3>);
  const AppLogin = () => <Login onLogin={onLogin} />;
  return (
    <Router>
      <Header onLogout={onLogout} />
      <div>
        {!autenticate || <Redirect to={"/"} />}
        <Route exact path="/" component={AppHome} />
        <Route exact path="/login" component={AppLogin} />
      </div>
    </Router>
  );
};

export default App;
