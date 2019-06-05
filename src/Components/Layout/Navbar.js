import React from 'react';
import {Link} from 'react-router-dom';
//import Dropdown from 'react-bootstrap/DropdownButton'
import Dropdown from './Dropdown';
//import SearchPage from '../Search'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <Link className="navbar-brand text-white " to="/home">
    ReactJS With Prismic CMS Backend
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto justify-content">
        <li className="nav-item active">
          <Link className="nav-link text-white text-uppercase ml-5" to="/home">
          &nbsp;<i class="fas fa-home"></i>
          Documents
          <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/details">
          &nbsp;<i class="fas fa-home"></i>
          Pages
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">
          Contact Us
          </Link>
        </li>
        <li className="dropdown text-white text-uppercase ml-5"> 
         <Dropdown />
    </li>
      </ul>
     {/* <SearchPage /> */}
    </div>
  </nav>
  );
      

}
export default Navbar;