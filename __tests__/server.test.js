
'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const { sequelizeDatabase } = require('../src/auth/models');

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('Server', () => {

  test('returns 404 for invalid route', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });

  test('returns 404 for invalid method', async () => {
    const response = await mockRequest.post('/');
    expect(response.status).toEqual(404);
  });

});
