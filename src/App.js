
import { useState, useEffect } from "react";

import {GlobalStyle} from './styles/styles';
import logoStarWars from './assets/images/logoStarWars.png';  

import ListShip from "./components/listShip/listShip";

import axios from "axios";

const App = (_) => {

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
      <GlobalStyle />
      <header>
        <a href="" className='logoHead'><img src={logoStarWars} alt="Star Wars Logo" /></a>
      </header>

      {ships}

    </>
  );
}

export default App;
