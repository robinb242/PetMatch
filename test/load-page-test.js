const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('/ (Home Page)', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('/quiz (Quiz Page)', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000/quiz')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('/petsearch (Pet Search Page)', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000/petsearch')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})