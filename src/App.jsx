import React from "react";
import "./styles/index.scss";
import { Navbar } from "./components/NavBar/NavBar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Home } from "./pages/Home";
import { Route } from "react-router";

const App = () => {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
};

export default App;
