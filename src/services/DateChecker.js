import { isNotWeekend, isDisabled } from '../helper/date'
import config from '../config'

export default class DateChecker {
  constructor(disabledDates, convertToLocal) {
    this.disabledDates = disabledDates || []
    this.noRegularTour = config.tourHTMLEntities.noRegularTour
    this.disabledTour = config.tourHTMLEntities.disabled
    this.convertToLocal = convertToLocal || false
  }

  isAvailable(date) {
    if (config.allowOnlyWeekends && isNotWeekend(date)) {
      return [false, this.noRegularTour.style, this.noRegularTour.tooltip]
    }

    if (isDisabled(date, this.disabledDates, this.convertToLocal)) {
      return [false, this.disabledTour.style, this.disabledTour.tooltip]
    }

    return [true]
  }
}
