import createRequest from './createRequest'

describe('a request', () => {
  it('should be instantiated', () => {
    const request = createRequest()
    expect(request).toBeTruthy()
  })

  it('should use a http request', done => {
    /* global XMLHttpRequest */
    const request = new XMLHttpRequest()
    request.open('GET', 'http://hauntedleipzig.de', true)
    request.onload = () => {
      console.log(123)
      done()
    }
    request.send()
  })

  xit('should fetch data', async () => {
    const callback = data => {
      console.log(data)
    }

    const request = createRequest(
      'http://hauntedleipzig.de/wordpress/wp-content/themes/hauntedleipzig/js/data.txt',
      callback
    )
    request.send()
  })
})
