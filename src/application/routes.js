
import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/detail';
import List from '../pages/list';
import LoginSign from '../pages/loginSign';
import ErrorPage from '../pages/errorPage';


const RoutesApp = () => {

  const logged = JSON.parse(localStorage.getItem("userSWLogged"));
  const [show, setShow] = useState(logged ? true : false);

  useEffect(() => { 

    const loggedLS = JSON.parse(localStorage.getItem("userSWLogged"));
    setShow(loggedLS);
  }, [show]);

  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route
          path="/list"
          element={ show ? ( <List /> ) : ( <Navigate replace to="/loginSignUp" /> ) }
        />
        <Route
          path="/ship/:id"
          element={ show ? ( <Detail /> ) : ( <Navigate replace to="/loginSignUp" /> ) }
        />
        <Route path="/loginSignUp" element={<LoginSign/>} />
        <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
}



export default RoutesApp;
