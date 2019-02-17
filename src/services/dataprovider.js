import config from '../config'
import { transformDateLinesToArray } from '../helper'

export default class DataProvider {
  parseData(data) {
    console.log('finished loading data: ' + data)
    return transformDateLinesToArray(data)
  }

  // TODO: remove and mock this in a test
  useDummyData() {
    const today = new Date().toLocaleDateString('de-DE')
    return this.parseData(today)
  }

  fetch() {
    if (config.testing) {
      console.log('Running in TEST mode.')
      return this.useDummyData()
    }

    return jQuery.get(config.dataApi, this.parseAndSetData)
  }
}
