import config from '../../config'
import DataProvider from '../../services/DataProvider'
import DateChecker from '../../services/DateChecker'
import {
  enableDatepicker,
  setReadonly,
  setRegionToGerman
} from '../datepicker/jquery'

import './style.css'

export default class App {
  constructor() {
    this.dateChecker = new DateChecker()
  }

  init() {
    console.log(config.testing)
    const dataProvider = new DataProvider()

    const finishedLoadingDates = dates => {
      this.dateChecker.setDisabledDates(disabledDates)
    }
    const disabledDates = dataProvider.fetch(finishedLoadingDates)
  }

  render() {
    const [firstInput] = document.querySelectorAll(config.queryElement)

    if (!firstInput) {
      console.warn('Could not find injection point for the datepicker.')
      return
    }

    setRegionToGerman()
    enableDatepicker(firstInput, this.dateChecker)
    setReadonly(firstInput)
  }
}
