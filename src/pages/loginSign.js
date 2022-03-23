
import React, {useState, useContext} from "react";
import { AppContext } from '../application/provider';

import {Wrapper, FormStyle} from '../styles/styles';

import Header from "../components/header/header";
import yoda from '../assets/images/yodalogin.jpg';
import yodaSign from '../assets/images/yodasign.jpg';

import { useNavigate } from "react-router-dom";

const LoginSign = (_) => {

  const [state, setState] = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorLogin, setErrorLogin] = useState(false)

  const [emailNew, setEmailNew] = useState('');
  const [passNew, setPassNew] = useState('');

  const users = JSON.parse(localStorage.getItem("usersStarwars"));
  const [arrayUsers, setArrayUsers] = useState(users ? users : []);

  const navigate = useNavigate();


  const login = (event) => {
    event.preventDefault();
    const userLogged = arrayUsers.filter(function(element) {
      if ((element.email === email) && (element.password === pass)) {
        return element;
      }
    })

    if (userLogged.length > 0) {
      localStorage.setItem('userSWLogged', JSON.stringify(true));
      localStorage.setItem('userSWMail', email);
      setErrorLogin(false);
      navigate(process.env.PUBLIC_URL + '/');
      setState(true);
      console.log('user logged');
    }
    else {
      setErrorLogin(true);
    }
  };

  const createUser = (event) => {
    event.preventDefault();
    const newUser = {
      email: emailNew,
      password: passNew
    }
    
    const newUsertoSave = [...arrayUsers, newUser];
    localStorage.setItem('usersStarwars', JSON.stringify(newUsertoSave));
    localStorage.setItem('userSWLogged', JSON.stringify(true));
    localStorage.setItem('userSWMail', emailNew);
    navigate(process.env.PUBLIC_URL + '/');
    setState(true);
    console.log('user created');

  };

  return (
    <>
      <FormStyle />
      <Header/>

      <Wrapper className="wrapperLogin">
        
        <div className="loginBox">
          <img src={yoda} alt="Star Wars Login" className="imageDest imageDest__small "/>

          <h2 className="t-t2">Log in you must</h2>
          
          <form>
            <label>
              <span>E-Mail:</span>
              <input
                name="email"
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </label> 
            <label>
            <span>Password:</span>
              <input
                name="passw"
                type="password"
                placeholder="Enter your password"
                value={pass}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </label>

            {errorLogin ? <p className="errorForm">You are not registered, padawan</p>: ''}

            <button onClick={login}>Enter</button>

          </form>
        </div>

        <div className="loginBox loginBox--second">
          <img src={yodaSign} alt="Star Wars Sign Up" className="imageDest imageDest__small "/>

          <h2 className="t-t2">Create user to be jedi you must</h2>

          <form>
            <label>
            <span> E-Mail:</span>
              <input
                name="email"
                type="email"
                placeholder="Enter your e-mail"
                value={emailNew}
                onChange={(event) => {
                  setEmailNew(event.target.value);
                }}
              />
            </label> 
            <label>
            <span>Password:</span>
              <input
                name="passw"
                type="password"
                placeholder="Set your password padawan"
                value={passNew}
                onChange={(event) => {
                  setPassNew(event.target.value);
                }}
              />
            </label>

            <button onClick={createUser}>Register</button>

          </form>
        </div>

      </Wrapper>
      
    </>
  );
}

export default LoginSign;
