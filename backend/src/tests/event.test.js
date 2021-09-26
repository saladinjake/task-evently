const request = require('supertest');
const mongoose = require('mongoose');
const { expect } = require('chai');
const app = require('../server');

describe('Evently API', () => {
  before(async () => {
    if (mongoose.connection.readyState !== 1) {
      await new Promise(resolve => mongoose.connection.once('open', resolve));
    }
  });

  after(async () => {
    await mongoose.connection.close();
  });

  describe('GET /api/events', () => {
    it('should return all events', async () => {
      const res = await request(app).get('/api/events');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal('OK');
    });
  });
});
