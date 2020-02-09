import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Logo from "../resources/logo.jpg";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <img src={Logo} alt="logo"/>
          </header>
          <ul className="header">
            <li><NavLink to="/">Strona główna</NavLink></li>
            <li><NavLink to="/about">O uczelni</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <footer>by Szymon Maciejewski</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
