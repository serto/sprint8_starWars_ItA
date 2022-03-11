
import React, { useState, useEffect } from "react";

import { Link, useParams } from 'react-router-dom';
import Header from "../components/header/header";
import {Wrapper} from '../styles/styles';

import axios from "axios";

const Detalle = (_) => {

  const { id } = useParams();

  const [name, setName] = useState();
  const [model, setModel] = useState();
  const [classShip, setClassShip] = useState();



  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/starships/${id}`)
      .then((res) => {
        console.log(res);
        //console.log(res.data);
        setName(res.data.name);
        setModel(res.data.model);
        setClassShip(res.data.starship_class);
      })
    }, []);
 /*
 ESTO ES RES.DATA
 MGLT: "60"
cargo_capacity: "36000000"
consumables: "2 years"
cost_in_credits: "150000000"
created: "2014-12-10T15:08:19.848000Z"
crew: "47,060"
edited: "2014-12-20T21:23:49.870000Z"
films: (3) ['https://swapi.py4e.com/api/films/1/', 'https://swapi.py4e.com/api/films/2/', 'https://swapi.py4e.com/api/films/3/']
hyperdrive_rating: "2.0"
length: "1,600"
manufacturer: "Kuat Drive Yards"
max_atmosphering_speed: "975"
model: "Imperial I-class Star Destroyer"
name: "Star Destroyer"
passengers: "n/a"
pilots: []
starship_class: "Star Destroyer"
url: "https://swapi.py4e.com/api/starships/*/




  return (
    <>
      <Header />
      
      <Wrapper>
        <h1>{name}</h1>
        <h3>{model}</h3>
        <h4>{classShip}</h4>
      </Wrapper>
    </>
  );
}

export default Detalle;
