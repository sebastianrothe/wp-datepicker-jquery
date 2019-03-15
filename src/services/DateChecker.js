import { isNotWeekend, isDisabled } from '../helper/date'
import config from '../config'

export default class DateChecker {
  constructor(disabledDates, convertToLocal) {
    this.disabledDates = disabledDates || []
    this.noRegularTour = config.tourHTMLEntities.noRegularTour
    this.disabledTour = config.tourHTMLEntities.disabled
    this.convertToLocal = convertToLocal || false
    this.isAvailable = date => isAvailable(date, this)
  }

  setDisabledDates(disabledDates) {
    this.disabledDates = disabledDates
  }
}

const isAvailable = (date, instance) => {
  if (config.allowOnlyWeekends && isNotWeekend(date)) {
    return [false, instance.noRegularTour.style, instance.noRegularTour.tooltip]
  }

  if (isDisabled(date, instance.disabledDates, instance.convertToLocal)) {
    return [false, instance.disabledTour.style, instance.disabledTour.tooltip]
  }

  return [true]
}
