import React from "react";
import { screen, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ListShip from "../components/listShip/listShip";

describe('List Ship component', () => {

  const ship = {
    url: 'http://wwww.test.com/images/7/',
    name: 'X-wing',
    model: 'War Plane'
  } 

  it('must display name Ship', () => {
    render(<MemoryRouter><ListShip ship={ship} key='1' /></MemoryRouter>);
    expect(screen.queryByText(/X-wing/i)).toBeInTheDocument();
  });

  it('must display model Ship', () => {
    render(<MemoryRouter><ListShip ship={ship} key='1' /></MemoryRouter>);
    expect(screen.queryByText(/War Plane/i)).toBeInTheDocument();
  })

  it('must display link', () => {
    render(<MemoryRouter><ListShip ship={ship} key='1' /></MemoryRouter>);
    const listShip = screen.getByRole('link');
    expect(listShip).toHaveAttribute('href', '/ship/7');
  })

});