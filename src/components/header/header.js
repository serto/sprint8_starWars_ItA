
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu';
import logoStarWars from '../../assets/images/logoStarWars.png';

const Header = () => {
  return (
    <header>
      <Link to="/" className='logoHead'><img src={logoStarWars} alt="Star Wars Logo" /></Link>

      <Menu />
    </header>

    );
}

export default Header;