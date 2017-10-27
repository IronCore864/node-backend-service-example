import request from 'supertest'
import app from "../app"

describe('App', function() {
  describe('GET /', function() {
    it('responds with status 200', function(done) {
      request(app)
        .get('/')
        .expect(200, (err, res) => {
          done()
        })
    })
  })

  describe('GET /foo/bar', function() {
    it('fails as expected', function(done) {
      request(app)
        .get('/foo/bar')
        .expect(404, (err, res) => {
          done()
        })
    })
  })
})

