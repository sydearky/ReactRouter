import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Team from "./Team";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <label className="chill">CHILL OUT</label>
          <ul className="nav_list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/Team" className="nav-link">
                Team
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
