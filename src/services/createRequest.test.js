import createRequest from './createRequest'
import config from '../config'

/* global XMLHttpRequest */
describe('a request', () => {
  it('should be instantiated', () => {
    const request = createRequest()
    expect(request).toBeTruthy()
  })

  it('should use a http request', done => {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://gruseltour-berlin.de', true)
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

    const request = createRequest(config.dataApi, callback)
    request.send()
  })
})
