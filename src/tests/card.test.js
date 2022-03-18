import React from "react";
import { screen, render } from '@testing-library/react';

import CardStarWars from '../components/card/card';

describe('testing Card', () => {

  const urlFake='http://wwww.test.com/images/7/';
  const nameFake='Han';
  const typeCardFake='movie';


  it('must display name ', () => {
    render(<CardStarWars name={nameFake} url={urlFake} typeCard={typeCardFake} key='1' />);
    expect(screen.queryByText(/han/i)).toBeInTheDocument();
  })

  it('must display url ', () => {
    render(<CardStarWars name={nameFake} url={urlFake} typeCard={typeCardFake} key='1' />);
    const imageCard = screen.getByRole('img');
    expect(imageCard).toHaveAttribute('src', 'https://starwars-visualguide.com/assets/img/films/7.jpg');
    expect(imageCard).toHaveAttribute('alt', 'Han');
  })

});