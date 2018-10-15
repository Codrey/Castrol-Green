import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom"


const NavBar = () => {
  return (
        <nav className="navbar-fixed nav-wrapper green darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">logo</Link>
            <ul className="right hide-on-med-and-down">
              <li><NavLink to="/">Intro</NavLink></li>
              <li><NavLink to="/fleetinput">Fleet Input</NavLink></li>
              <li><NavLink to="/results">Results</NavLink></li>
              <li><NavLink to="/summary">Summary</NavLink></li>
            </ul>
          </div>
        </nav> 
  )
}

export default withRouter(NavBar)