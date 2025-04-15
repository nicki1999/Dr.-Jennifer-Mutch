import logo from "../../images/Logo.png";
import M from "materialize-css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    let dropdownElems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdownElems);
  }, []);
  return (
    <div>
      <nav className="backgroundColor stick-navbar">
        <div className="nav-wrapper container">
          <ul id="" className="right">
            <li>
              <a href="mailto: j.mutch.ortho@gmail.com">
                <i class="material-icons">email</i> &nbsp;&nbsp;&nbsp;
                <span> j.mutch.ortho@gmail.com</span>
              </a>
            </li>
            <li className="hide-on-med-and-down">
              <a href="https://maps.app.goo.gl/cY8mGsgppjoyjDFN7">
                <i class="material-icons">location_on</i> &nbsp;&nbsp;
                <span> Westmount Square</span>
              </a>
            </li>
            <li className="hide-on-med-and-down">
              <a href="https://maps.app.goo.gl/FWnAXDWUk6WKNbfQA">
                <i class="material-icons">location_on</i> &nbsp;&nbsp;
                <span> St-Mary’s hospital </span>
              </a>
            </li>
            <li className="book-appointment">
              <div className="col s12">
                <a class="waves-effect waves-light white black-text btn-appointment">
                  <i class="material-icons left">local_phone</i>Contact Us
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <Link to="/KneeReplacement">- Knee Replacement</Link>
        </li>
        <li>
          <Link to="/HipReplacement">- Hip Replacement</Link>
        </li>
        <li class="divider"></li>
        <li>
          <Link to="/ShoulderReplacement">- Shoulder Replacement</Link>
        </li>
        <li>
          <a href="#!" className="grey-text text-darken-3">
            Robotic-assisted Joint Replacement
          </a>
        </li>
      </ul>
      <nav className="white non-stick-navbar">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            <img src={logo} className="logo" />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons black-text">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/" className="black-text">
                Home <span className="header-seperator">|</span>
              </Link>
            </li>
            <li>
              <a href="#about" className="black-text">
                About <span className="header-seperator">|</span>
              </a>
            </li>
            {/* <li>
              <a href="expertise.html" className="black-text">
                Surgeries <span className="header-seperator">|</span>
              </a>
            </li> */}
            <li>
              <a
                class="dropdown-trigger black-text"
                href="#!"
                data-target="dropdown1"
              >
                Surgeries
                <i class="material-icons right">arrow_drop_down</i>
                {/* <span className="header-seperator">|</span> */}
              </a>
            </li>
            <li>
              <a href="#articles" className="black-text">
                Articles <span className="header-seperator">|</span>
              </a>
            </li>
            <li>
              <a href="contactus.html" className="black-text">
                Contact Us <span className="header-seperator">|</span>
              </a>
            </li>
            <li>
              <a href="enfr.html" className="black-text">
                EN | FR{" "}
              </a>
            </li>
          </ul>

          <ul className="sidenav" id="mobile-demo">
            <br />
            <li>
              <Link to="/" className="black-text">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="black-text">
                About
              </a>
            </li>
            <li>
              <a href="#expertise" className="black-text">
                Surgeries
              </a>
            </li>
            <li className="surgeries-sub-category">
              <Link to="/KneeReplacement">- Knee Replacement</Link>
            </li>
            <li className="surgeries-sub-category">
              <Link to="/HipReplacement">- Hip Replacement</Link>
            </li>
            <li className="surgeries-sub-category">
              <Link to="/ShoulderReplacement">- Shoulder Replacement</Link>
            </li>
            <li className="surgeries-sub-category">
              <a href="#expertise" className="black-text">
                - Robotic-assisted Joint Replacement
              </a>
            </li>
            <li>
              <a href="#articles" className="black-text">
                Articles
              </a>
            </li>
            <li>
              <a href="contactus.html" className="black-text">
                Contact Us
              </a>
            </li>
            <li>
              <a href="enfr.html" className="black-text">
                EN | FR{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <nav classNameName='navbar'>
            <div classNameName='container'>
            <img src={logo} style={{height:"100px"}} />
            <div classNameName="right-align">

            </div>
            </div>
            </nav> */}
    </div>
  );
}
