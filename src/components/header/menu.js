
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './menu.style';

const Menu = () => {
  return (
    <MenuStyle>
      <nav>
        <Link to="/">Home</Link>
        <Link to="*">404</Link>
      </nav>
    </MenuStyle>

    );
}

export default Menu;