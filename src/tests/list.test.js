
import React from "react";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../application/provider';
import List from '../pages/list';

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
        results: [{ 
          MGLT: "60",
          cargo_capacity: "36000000",
          consumables: "2 years",
          cost_in_credits: "150000000",
          created: "2014-12-10T15:08:19.848000Z",
          crew: "47,060",
          edited: "2014-12-20T21:23:49.870000Z",
          films: ['https://swapi.py4e.com/api/films/1/', 'https://swapi.py4e.com/api/films/2/', 'https://swapi.py4e.com/api/films/3/'],
          hyperdrive_rating: "2.0",
          length: "1,600",
          manufacturer: "Kuat Drive Yards",
          max_atmosphering_speed: "975",
          model: "Imperial I-class Star Destroyer",
          name: "Star Destroyer",
          passengers: "n/a",
          pilots: [],
          starship_class: "Star Destroyer",
          url: "https://swapi.py4e.com/api/starships/3/",
        }]
      }],
    }] as AxiosResponse;

    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
    
    render(
      <AppContext.Provider value={contextValues}>
        <MemoryRouter><List /></MemoryRouter>
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Star Destroyer/i)).toBeInTheDocument();

  })

});

