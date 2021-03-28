import config from '../config'
import { transformDateLinesToArray } from '../helper'
import { toGermanDateString } from '../locale/de-DE'
import createRequest from './create-request'

export default class DataProvider {
  parseData(data) {
    return transformDateLinesToArray(data)
  }

  // TODO: remove and mock this in a test
  useDummyData() {
    console.info('Running in TEST mode.')
    const today = toGermanDateString(new Date())
    return transformDateLinesToArray(today)
  }

  fetch(callback) {
    const request = createRequest(config.dataApi, data => callback(this.parseData(data)))
    request.send()
  }
}
