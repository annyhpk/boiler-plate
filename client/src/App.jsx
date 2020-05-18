import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./hoc/auth";
//page for this page
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Registerpage from "./components/views/RegisterPage/RegisterPage";

import Navbar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
        <div style={{ minHeight: 'calc(90vh - 70px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(Registerpage, false)} />
          </Switch>
        </div>
      <Footer />
    </Suspense>
  );
}

export default App;
