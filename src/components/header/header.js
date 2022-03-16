
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Menu from './menu';
import logoStarWars from '../../assets/images/logoStarWars.png';

const Header = () => {

  const mailLS = localStorage.getItem("userSWMail");
  const logged = JSON.parse(localStorage.getItem("userSWLogged"));

  const [mailUser, setMailUser] = useState(logged ? mailLS : 'no user');
  const [show, setShow] = useState(logged ? true : false);


  return (
    <header>
      <Link to="/" className='logoHead'><img src={logoStarWars} alt="Star Wars Logo" /></Link>

      <div className='headerSign'>
       
        { show ? 
          <p className='headerSign__nameUser'>JEDI : {mailUser}</p>
        :
          <>
          <Link to="/loginSignUp" className='headerSign__links'>Login </Link> / 
          <Link to="/loginSignUp" className='headerSign__links'> Sign Up</Link>
          </>  
        }
      </div>

      <Menu />
    </header>

    );
}

export default Header;