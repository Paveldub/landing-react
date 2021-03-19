import React from "react";
import "./styles/index.scss";
import { Navbar } from "./components/NavBar/NavBar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Home } from "./pages/Home";
import { SignInPage } from "./pages/SignInPage";
import { Route } from "react-router";

const App = () => {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SignInPage} exact />
    </>
  );
};

export default App;
