import React from "react";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../application/provider';
import Home from '../pages/home';

describe('Home page comp', () => {

  it('must display Title', () => {

    const contextValues = [{state: false}];
    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><Home/></MemoryRouter>
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Star Wars Ships Wik/i)).toBeInTheDocument();

  })

});

