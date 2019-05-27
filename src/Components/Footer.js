import React from 'react';

export default class Footer extends React.Component {
  
  render() {
    return (
      <footer>

          GitHub link<a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Github</a>
          <br/>
          <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
            <img className="footer-logo" src="/images/logo-prismic.svg" alt="Gray Prismic logo"/>
          </a>
        
      </footer>
    );
  }
}
