import React, { Component } from 'react';

class Menu extends Component {
  render() {

    return (
      <div>
            {this.props.showMenu &&
        <section id="menu">
          <section>
            <form className="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </section>
          <section>
            <ul className="links">
              <li>
                <a href="/">
                  <h3>Lorem ipsum</h3>
                  <p>Feugiat tempus veroeros dolor</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>Dolor sit amet</h3>
                  <p>Sed vitae justo condimentum</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>Feugiat veroeros</h3>
                  <p>Phasellus sed ultricies mi congue</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>Etiam sed consequat</h3>
                  <p>Porta lectus amet ultricies</p>
                </a>
              </li>
            </ul>
          </section>
        </section>
      }
      </div>
    );
  }
}

export default Menu;
