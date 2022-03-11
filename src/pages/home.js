
import React, { useState, useEffect } from "react";

import {Wrapper} from '../styles/styles';

import ListShip from "../components/listShip/listShip";
import Header from "../components/header/header";

import axios from "axios";

const Home = (_) => {

  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/starships/`)
      .then((res) => {
        //console.log(res);
        //console.log(res.data.results);
        const shipsCall = res.data.results;
        setShips(shipsCall.map( (ship, key) =>  <ListShip ship={ship} key={key} /> ));
      })
  }, []);


  return (
    <>

      <Header/>

      <Wrapper>
        {ships}
      </Wrapper>
      
    </>
  );
}

export default Home;
