import React from "react";
import { screen, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Menu from '../components/header/menu';

describe('menu comp', () => {

  it('must display home option', () => {
    render(<MemoryRouter><Menu/></MemoryRouter>);
    expect(screen.queryByText(/home/i)).toBeInTheDocument();
  })

  it('must display ship option', () => {
    render(<MemoryRouter><Menu/></MemoryRouter>);
    expect(screen.queryByText(/ship/i)).toBeInTheDocument();
  })

});