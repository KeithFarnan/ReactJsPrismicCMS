import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
//import { BrowserRouter } from 'react-router-dom';
//import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import {Link} from 'react-router-dom';

const DropdownPage = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="dark">
        DOCUMENTS
      </MDBDropdownToggle>

      <MDBDropdownMenu basic>

        <MDBDropdownItem>
        <Link to="/home">
        All Documents
        </Link>
        </MDBDropdownItem>
        <MDBDropdownItem >Another Action</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;