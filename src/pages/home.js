
import React from "react";

import {Wrapper} from '../styles/styles';

import Header from "../components/header/header";
import home from '../assets/images/home.jpg'


const Home = (_) => {

  return (
    <>

      <Header/>

      <Wrapper>
        
        <img src={home} alt="Star Wars" className="imageDest"/>
        
        <h1 className="t-t1">Star Wars Ships Wiki</h1>
        
        <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armoured space station with enough power to destroy an entire planet.</p> 

        <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….</p>


      </Wrapper>
      
    </>
  );
}

export default Home;
