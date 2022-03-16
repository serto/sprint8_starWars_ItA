
import React, { useState, useEffect } from "react";

import { Link, useParams } from 'react-router-dom';
import Header from "../components/header/header";
import {Wrapper} from '../styles/styles';
import { DetailStyle } from '../styles/styles';

import axios from "axios";

const Detalle = (_) => {

  const { id } = useParams();

  const [name, setName] = useState();
  const [model, setModel] = useState();
  const [classShip, setClassShip] = useState();
  const [filmsUrls, setFilmsUrls] = useState([]);
  const [pilotsUrls, setPilotsUrls] = useState([]);
  const [films, setFilms] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [hyper, setHyper] = useState();
  const [cost, setCost] = useState();
  const [atSpedd, setAtSpeed] = useState();
  const [length, setLength] = useState();
  const [manufac, setManufact] = useState();

  const urlImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/starships/${id}`)
      .then((res) => {
        //console.log(res);
        //console.log(res.data);
        setName(res.data.name);
        setModel(res.data.model);
        setClassShip(res.data.starship_class);
        setFilmsUrls(res.data.films);
        setPilotsUrls(res.data.pilots);
        setHyper(res.data.hyperdrive_rating);
        setCost(res.data.cost_in_credits);
        setAtSpeed(res.data.max_atmosphering_speed);
        setLength(res.data.length);
        setManufact(res.data.manufacturer);
      });
  }, []);

  useEffect( async () => {


    if(pilotsUrls) {
      const data = async () => {
        return await Promise.all(pilotsUrls.map(async (el) => {
          const r = await axios.get(el)
          //console.log(r.data.name);
          return r.data.name;
        }))
      };
    
      const valuesPilots = await data();
      setPilots(valuesPilots);

    }

    if(filmsUrls) {
      const data = async () => {
        return await Promise.all(filmsUrls.map(async (el) => {
          const r = await axios.get(el)
          //console.log(r.data.title);
          return r.data.title;
        }))
      };
    
      const valuesFilms = await data();
      setFilms(valuesFilms);

    }

  }, [pilotsUrls, filmsUrls]);


  return (
    <>
      <DetailStyle />
      <Header />
      
      <Wrapper className="detail">
        <p>
          <Link to="/list" className="linkBack">&#60; Back</Link>
        </p>
        <div className="detail__imageComp">
          <img src={urlImage} alt={name} className="detail__image" />
          <div className="detail__info">
            <h1>{name}</h1>
            <h3>{model}</h3>
            <h4>{classShip}</h4>
          </div>
        </div>
        <ul className="detail__props">
          <li><span>Films :</span> {films}</li>
          <li><span>Pilots :</span> {pilots}</li>
          <li><span>HyperVelocity:</span> {hyper}</li>
          <li><span>Cost in credits:</span> {cost}</li>
          <li><span>Max atmosphering speed:</span> {atSpedd}</li>
          <li><span>Length:</span> {length}</li>
          <li><span>Manufacturer:</span> {manufac}</li>
        </ul>
      </Wrapper>
    </>
  );
}

export default Detalle;
