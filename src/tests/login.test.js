
import React from "react";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../application/provider';
import LoginSign from '../pages/loginSign';
import userEvent from '@testing-library/user-event';


describe('Login page', () => {

  it('must display button Login', () => {

    const contextValues = [{state: false}];

    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><LoginSign /></MemoryRouter>
      </AppContext.Provider>
    );

    expect(screen.queryByText(/Enter/i)).toBeInTheDocument();

  })


  it('must display button SignUp', () => {

    const contextValues = [{state: false}];

    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><LoginSign /></MemoryRouter>
      </AppContext.Provider>
    );

    expect(screen.queryByText(/Register/i)).toBeInTheDocument();

  })


  it('must display button Login', () => {

    const contextValues = [{state: false}];

    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><LoginSign /></MemoryRouter>
      </AppContext.Provider>
    );

    const submitButton = screen.getByText(/Enter/i);

    userEvent.click(submitButton);

    const error = screen.getByText(/not registered/i); 
    expect(error).toBeInTheDocument();

  })

});

