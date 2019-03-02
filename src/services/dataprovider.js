import config from '../config'
import { transformDateLinesToArray } from '../helper'

export default class DataProvider {
  parseData(data) {
    return transformDateLinesToArray(data)
  }

  // TODO: remove and mock this in a test
  useDummyData() {
    const today = new Date().toLocaleDateString('de-DE')
    return transformDateLinesToArray(today)
  }

  fetch() {
    if (config.testing) {
      console.info('Running in TEST mode.')
      return this.useDummyData()
    }

    const request = this.createRequest()
    request.send()
  }

  createRequest() {
    /* global XMLHttpRequest */
    const request = new XMLHttpRequest()
    request.open('GET', config.dataApi, true)

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = this.parseData(request.responseText)
        console.info('finished loading data: ' + data)
        return data
        // TODO: use callback
      } else {
        console.error('Failed getting disabled dates. ', request.status)
      }
    }

    request.onerror = () => {
      console.error('Failed getting disabled dates. ', request.status)
    }

    return request
  }
}
