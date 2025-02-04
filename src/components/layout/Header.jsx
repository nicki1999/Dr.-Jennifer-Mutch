import logo from '../../images/Logo.png';
import M from 'materialize-css';
import React, { useEffect } from 'react';

export default function Header(){

    useEffect(()=>{
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems); 
    }, []);
    return(
        <div>

<nav className='white'>
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo"><img src={logo} className='logo'/></a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="home.html" className='black-text'>Home <span className='header-seperator'>|</span></a></li>
        <li><a href="about.html" className='black-text'>About <span className='header-seperator'>|</span></a></li>
        <li><a href="expertise.html" className='black-text'>Expertise <span className='header-seperator'>|</span></a></li>
        <li><a href="contactus.html" className='black-text'>Contact Us <span className='header-seperator'>|</span></a></li>
        <li><a href="enfr.html" className='black-text'>EN | FR </a></li>
      </ul>

   <ul className="sidenav" id="mobile-demo">
   <li><a href="home.html" className='black-text'>Home</a></li>
        <li><a href="about.html" className='black-text'>About</a></li>
        <li><a href="expertise.html" className='black-text'>Expertise</a></li>
        <li><a href="contactus.html" className='black-text'>Contact Us</a></li>
        <li><a href="enfr.html" className='black-text'>EN | FR </a></li>
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

