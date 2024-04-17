const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds with "Hello, ERIC Robotics!"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, ERIC Robotics!');
    });
});

describe('GET /api/data', () => {
    it('responds with JSON data', async () => {
        const response = await request(app).get('/api/data');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
    });
});

describe('POST /api/echo', () => {
    it('echoes back the message', async () => {
        const message = 'Hello, Jest!';
        const response = await request(app)
            .post('/api/echo')
            .send({ message });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ echo: message });
    });
});
