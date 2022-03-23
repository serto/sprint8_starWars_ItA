
import React from "react";

import Header from "../components/header/header";
import {Wrapper} from '../styles/styles';

import errorImage from '../assets/images/404.jpg'

const ErrorPage = () => {

  return (
    <>
      <Header />
      
      <Wrapper>
        <img src={errorImage} alt="Error page" />
      </Wrapper>
    </>
  );
}

export default ErrorPage;
