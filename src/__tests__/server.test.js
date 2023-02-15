'use strict';

const supertest = require('supertest');
const { app } = require('../server');
const request = supertest(app);

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(404);
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('What a fine day for development');
  });

  it('handles \'/person\' route without query param correctly', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  it('handles \'/person\' route with query param correctly', async () => {
    const response = await request.get('/person').query({petName: 'Marv'});

    // console.log(response.body);

    expect(response.body.message).toEqual('Hello Marv!');
  });
});