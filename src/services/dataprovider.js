import config from '../config'
import { transformDateLinesToArray } from '../helper'

export default class DataProvider {
  constructor() {
    this.disabledTourDays = []
  }

  parseAndSetData(data) {
    console.log('finished loading data: ' + data)
    this.disabledTourDays = transformDateLinesToArray(data)
  }

  // TODO: remove and mock this in a test
  useDummyData() {
    const today = new Date().toLocaleDateString('de-de')
    this.parseAndSetData(today)
  }

  fetch() {
    if (config.testing) {
      console.log('Running in TEST mode.')
      this.useDummyData()
      return
    }

    jQuery.get(config.dataApi, this.parseAndSetData)
  }
}
