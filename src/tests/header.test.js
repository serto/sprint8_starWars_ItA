import React from "react";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../application/provider';
import Header from '../components/header/header';

describe('header comp', () => {

  it('must have login button', () => {

    const contextValues = [{state: false}];
    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><Header /></MemoryRouter>
      </AppContext.Provider>
    );
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toHaveAttribute('href', '/loginSignUp');
  })

  it('must have signup button', () => {

    const contextValues = [{state: false}];
    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><Header /></MemoryRouter>
      </AppContext.Provider>
    );
    const signupButton = screen.getByText(/Sign Up/i);
    expect(signupButton).toHaveAttribute('href', '/loginSignUp');
  })

});

