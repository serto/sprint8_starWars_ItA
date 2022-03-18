import React from "react";
import { screen, render } from '@testing-library/react';

import { MemoryRouter,UserProvider } from 'react-router-dom';

import Home from '../pages/home';

describe('menu comp', () => {

  it('must display a title in home', () => {
    render(<MemoryRouter><UserProvider><Home/></UserProvider></MemoryRouter>);
    expect(screen.queryByText(/Star Wars Ships Wik/i)).toBeInTheDocument();
  })

});