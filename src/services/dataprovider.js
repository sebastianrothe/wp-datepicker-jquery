import config from '../config'
import { transformDateLinesToArray } from '../helper'
import { toGermanDateString } from '../locale/de-DE'
import createRequest from './createRequest'

export default class DataProvider {
  parseData(data) {
    return transformDateLinesToArray(data)
  }

  // TODO: remove and mock this in a test
  useDummyData() {
    const today = toGermanDateString(new Date())
    return transformDateLinesToArray(today)
  }

  fetch() {
    if (config.testing) {
      console.info('Running in TEST mode.')
      return this.useDummyData()
    }

    const request = createRequest(config.dataApi, this.parseData)
    request.send()
  }
}
