import config from '../../config'
import DataProvider from '../../services/DataProvider'
import DateChecker from '../../services/DateChecker'
import datepicker from '../datepicker/jquery'

import './style.css'

export default class App {
  constructor() {
    this.dateChecker = new DateChecker([], true)
  }

  init() {
    const finishedLoadingDates = dates => {
      console.info('finished loading data: ' + dates)
      this.dateChecker.setDisabledDates(dates)
    }
    const dataProvider = new DataProvider()
    dataProvider.fetch(finishedLoadingDates)
  }

  render() {
    const [firstInput] = document.querySelectorAll(config.queryElement)

    if (!firstInput) {
      console.warn('Could not find injection point for the datepicker.')
      return
    }

    datepicker(firstInput, this.dateChecker)
  }
}
