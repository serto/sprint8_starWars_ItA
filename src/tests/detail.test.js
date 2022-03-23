
import React from "react";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../application/provider';
import Detail from '../pages/detail';

import axios, { AxiosResponse }  from "axios";
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('Detail comp', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('must display name of ship', async () => {

    const contextValues = [{state: false}];

    const mAxiosResponse = [{
      data: [{ 
        MGLT: "75",
        cargo_capacity: "100000",
        consumables: "2 months",
        cost_in_credits: "100000",
        created: "2014-12-10T16:59:45.094000Z",
        crew: "4",
        edited: "2014-12-20T21:23:49.880000Z",
        films: ['https://swapi.py4e.com/api/films/1/', 'https://swapi.py4e.com/api/films/2/', 'https://swapi.py4e.com/api/films/3/', 'https://swapi.py4e.com/api/films/7/'],
        hyperdrive_rating: "0.5",
        length: "34.37",
        manufacturer: "Corellian Engineering Corporation",
        max_atmosphering_speed: "1050",
        model: "YT-1300 light freighter",
        name: "Millennium Falcon",
        passengers: "6",
        pilots: ['https://swapi.py4e.com/api/people/13/', 'https://swapi.py4e.com/api/people/14/', 'https://swapi.py4e.com/api/people/25/', 'https://swapi.py4e.com/api/people/31/'],
        starship_class: "Light freighter",
        url: "https://swapi.py4e.com/api/starships/10/"
     }],
    }] as AxiosResponse;

    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
    
    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><Detail /></MemoryRouter>
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Millennium Falcon/i)).toBeInTheDocument();

  })

});

