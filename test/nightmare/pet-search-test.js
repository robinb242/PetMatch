
//Nightmare test that checks validity of submit button retuning correct data. 
const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe('test http://localhost:3000/petsearch', () => {
  it('should find a pet match from the PetFinder API search', function(done) {
    this.timeout('10s')

     let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()

    const nightmare = Nightmare()
    nightmare
      .goto('http://localhost:3000/petsearch')
      .type('search-btn', 'button')
      .click('#search-btn')
      .wait('#links .result__a')
      .evaluate(() => document.querySelector('#links .result__a').href)
      .end()
      .then(link => {
        expect(link).to.equal('search-results')
        done()
      })
  })
})

  //dtest of bad data entry in pet search form.
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    // show true lets you see wth is actually happening :)
    nightmare = new Nightmare({ show: true })
  })

  describe('given bad data', () => {
    it('should fail', done => {
      nightmare
      .goto('localhost/petmatch')
      .on('search-btn', (type, message) => {
        if (type == 'alert') done()
      })
      .type('.login-email-input', 'notgonnawork')
      .type('.login-password-input', 'invalid password')
      .click('.login-submit')
      .wait(2000)
      .end()
      .then()
      .catch(done)
    })
  })
})