const request = require('supertest')
const app = require('../app')


describe('GET "/items"', () => {
    it('respond with list of items', (done) => {
        let want = [
            { id: 1, name: 'iPhone12'},
            { id: 2, name: 'Galaxy S20'}
        ]
        request(app).get('/items').expect(want,done)

    })
})