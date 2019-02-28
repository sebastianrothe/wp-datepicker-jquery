import { isNotWeekend, isDisabled } from '../helper/date'
import config from '../config'

export default class DateChecker {
  constructor(disabledDates) {
    this.disabledDates = disabledDates || []
    this.noRegularTour = config.tourHTMLEntities.noRegularTour
    this.disabledTour = config.tourHTMLEntities.disabled
  }

  isAvailable(date) {
    if (config.allowOnlyWeekends && isNotWeekend(date)) {
      return [false, this.noRegularTour.style, this.noRegularTour.tooltip]
    }

    if (isDisabled(date, this.disabledDates)) {
      return [false, this.disabledTour.style, this.disabledTour.tooltip]
    }

    return [true]
  }
}
