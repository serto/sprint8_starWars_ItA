import React from "react";
import { screen, render, expect } from '@testing-library/react';

import Menu from '../components/header/menu';

describe('menu comp', () => {

  it('must display home option', () => {
    render(<Menu/>);
    expect(screen.queryByText(/home/i)).toBeInTheDocument();
  })

  it('must display ship option', () => {
    render(<Menu/>);
    expect(screen.queryByText(/ship/i)).toBeInTheDocument();
  })

});