import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
       <div className="container">
       <div className="row">
       {/* Column 1 */}
       <div className="col-sm-12">
       <h4>
           Contact US
       </h4>
       {/* Takes the Bullet Points out of the List */}
       <ul className="list-unstyled">
           <li>
                <a href="/">
                This is a list item
                </a>
            </li>
       </ul>
       </div>
       </div>
      </div>
      </div>
    </FooterContainer >
  );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a {
    color: var(--mainGrey);    
}
ul li a:hover {
    color: var(--mainLightGrey);  
}
`;