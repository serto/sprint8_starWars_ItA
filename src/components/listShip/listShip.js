
import React, {useState, useEffect} from 'react';

const ListShip = (props) => {

  const ship = props.ship;

  return (

      <div>
        <h2>{ship.name}</h2>
        <h4>{ship.model}</h4>
      </div>

    );

}

export default ListShip;