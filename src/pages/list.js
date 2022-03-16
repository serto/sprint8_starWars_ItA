
import React, { useState, useEffect } from "react";

import {Wrapper} from '../styles/styles';

import ListShip from "../components/listShip/listShip";
import Header from "../components/header/header";

import axios from "axios";

const List = (_) => {

  const [ships, setShips] = useState([]);
  const [nextShips, setNextShips] = useState();

  const callNextShips = () => {
    axios
      .get(nextShips)
      .then((res) => {
        const number = Math.random() +1;

        const shipsCall = res.data.results;
        const newShips = shipsCall.map( (ship, key) =>  <ListShip ship={ship} key={key + number} /> )
        const newArray = ships.concat(newShips);

        setShips(newArray); 
        (res.data.next) ? setNextShips(res.data.next) : setNextShips(null);
        
      });

  }


  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/starships/`)
      .then((res) => {
        //console.log(res);
        //console.log(res.data.results);
        const shipsCall = res.data.results;
        const array = shipsCall.map( (ship, key) =>  <ListShip ship={ship} key={key} /> );
        setShips(array);
        setNextShips(res.data.next);
      });

  }, []);

  useEffect(() => {
    console.log('ships useeffect :',ships)

    console.log('nextShips useeffect :',nextShips);
    const onScroll = () => {
      if( (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) && (nextShips) ){
        callNextShips();
      }
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);

  }, [ships, nextShips])

  return (
    <>

      <Header/>

      <Wrapper>
        
        {ships}

        { nextShips ? 
          <div>
            <p>View more ships </p>
          </div>
          :
          <div>
            <p>You are viewing all the star wars ships</p>
          </div>

        }
        
      </Wrapper>
      
    </>
  );
}

export default List;
