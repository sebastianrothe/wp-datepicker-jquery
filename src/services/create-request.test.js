import chai, { expect } from '@esm-bundle/chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import createRequest from './create-request'
import config from '../config'

chai.should()
chai.use(sinonChai)

describe('a request', () => {
  context('using XHR', () => {
    let requests = []

    before("mock xhr", () => {
      XMLHttpRequest = sinon.useFakeXMLHttpRequest()
      XMLHttpRequest.onCreate = (xhr) => {
        requests.push(xhr)
      }
    })

    beforeEach("reset requests", () => {
      requests = []
    })

    after("reset xhr", () => {
      XMLHttpRequest.restore()
    })

    it('should be instantiated', () => {
      const request = createRequest()
      expect(request).to.be.ok
    })

    it('should fetch mocked data', () => {
      const callback = sinon.spy()
      const request = createRequest(config.dataApi, callback)
      request.send()

      requests.should.have.lengthOf(1)

      const data = `22.03.2021
      24.03.2021`

      requests[0].respond(200, { "Content-Type": "application/txt" }, data)

      callback.should.have.been.calledWith(data)
    })
  })

  context('using fetch', () => {
    it('should be instantiated', () => {
      expect(window.fetch).to.be.ok
      expect(fetch).to.be.ok
    })

    it('should fail because of CORS', async () => {
      await fetch("https://gruseltour-berlin.de/wordpress/wp-content/themes/gruseltour-berlin-eighteen/data/data.txt", {
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }).then((res) => {
        console.log("response", res)
        expect(false).to.be.ok
      }).catch((error) => {
        // expected failing, due to CORS
        expect(true).to.be.ok
      })
    })
  })
})
