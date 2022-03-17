
import React, {useEffect, useState}  from 'react';
import { CardStyle } from './card.style';

const CardStarWars = (props) => {

  const [imageUrl, setImageUrl] = useState();

  const url = props.url.split("/").filter(function(element) { if (element) { return element } });
  const id = url[url.length-1];

  useEffect(() => {
    if (props.typeCard === 'pilot') {
      setImageUrl(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
    }
    if (props.typeCard === 'movie') {
       setImageUrl(`https://starwars-visualguide.com/assets/img/films/${id}.jpg`);
    }
  }, []);

  
  return (
      <CardStyle>
        <img src={imageUrl} alt={props.name} className='imageDest' />
        <p>{props.name}</p>
      </CardStyle>
    );

}

export default CardStarWars;