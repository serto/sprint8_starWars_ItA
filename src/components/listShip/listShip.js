
import React from 'react';
import { ListShipStyle } from './listShip.style';
import { Link } from 'react-router-dom';

const ListShip = (props) => {

  const ship = props.ship;
  const url = ship.url.split("/").filter(function(element) { if (element) { return element } });
  const id = url[url.length-1];

  return (
      <ListShipStyle>
        <Link to={`/ship/${id}`} >
          <h2>{ship.name}</h2>
          <h4>{ship.model}</h4>
        </Link>
      </ListShipStyle>
    );

}

export default ListShip;