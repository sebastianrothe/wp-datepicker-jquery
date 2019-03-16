import createRequest from './createRequest'

/* global XMLHttpRequest */
describe('a request', () => {
  it('should be instantiated', () => {
    const request = createRequest()
    expect(request).toBeTruthy()
  })

  it('should use a http request', done => {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://hauntedleipzig.de', true)
    request.onload = () => {
      done()
    }
    request.send()
  })

  it('should fetch data', done => {
    const callback = data => {
      console.log(data)
      done()
    }

    const request = createRequest(
      'http://hauntedleipzig.de/wordpress/wp-content/themes/hauntedleipzig/js/data.txt',
      callback
    )
    request.send()
  })
})
