const request = require("supertest")
const app = require('./server');

describe('Test my app server', () => {
    it('test in router get', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
})


describe('Test my app server', () => {
    it('test in router get', async () => {
        const res = await request(app).get('/teste1')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
})


describe('Test my app server', () => {
    it('test in router get', async () => {
        const res = await request(app).get('/teste2')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('test2')
    })
})
