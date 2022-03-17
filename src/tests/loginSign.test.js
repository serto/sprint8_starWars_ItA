import React from "react";
import { screen, render, expect } from '@testing-library/react';

import LoginSign from '../pages/loginSign';

describe('Login register page', () => {

  
  it('must display a title for loggin', () => {
    render(<LoginSign/>);
    expect(screen.queryByText(/Log in you must/i)).toBeInTheDocument();
  })
  

});