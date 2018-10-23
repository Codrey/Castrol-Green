import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom"

import castLogo from '../assets/castrol-logo-vector.png';
import smcastLogo from '../assets/favicon.png';

const NavBar = () => {
  return (
      <React.Fragment>
        <nav className="navbar-fixed nav-wrapper green darken-3 pos">
          <div className="container">
            <NavLink to="/" data-target="mobile-demo" class="sidenav-trigger sLogoSize">
              <i class="material-icons">menu</i>
              <img className="hide-on-large-and-up" src={castLogo} alt="Castrol Oil Vecton" />
            </NavLink>
            <Link to="/" className="logoSize hide-on-small-only">
              <img className="hide-on-med-and-down" src={castLogo} alt="Castrol Oil Vecton" />
            </Link>
            <ul className="left hide-on-med-and-down">
              <li><NavLink to="/">Intro</NavLink></li>
              <li><NavLink to="/fleetinput">Fleet Input</NavLink></li>
              <li><NavLink to="/results">Results</NavLink></li>
              <li><NavLink to="/summary">Summary</NavLink></li>
            </ul>
          </div>
        </nav>

        {/* Side Nav */}
        <ul class="sidenav scale-transition" id="mobile-demo">
           <img className="smcastLogo" src={smcastLogo} alt="Castrol Oil Vecton" />
            <li>
                <NavLink class="sidenav-close z-depth-2 nPad" to="/">Intro</NavLink>
            </li>
            <li>
                <NavLink class="sidenav-close z-depth-5 nPad" to="/fleetinput">Fleet Input</NavLink>
            </li>
            <li>
                <NavLink class="sidenav-close z-depth-2 nPad" to="/results">Results</NavLink>
            </li>
            <li>
                <NavLink class="sidenav-close z-depth-5 nPad" to="/summary">Summary</NavLink>
            </li>
        </ul>
        
      </React.Fragment>

  )
}

export default withRouter(NavBar)