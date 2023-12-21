import React from 'react';
import logo from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="logo-solarSistem">
          <img src={ logo } alt="logo" />
        </div>
      </header>
    );
  }
}

export default Header;
