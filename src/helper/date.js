import { toGermanDateString } from '../locale/de-DE'

const DATE_FRIDAY = 5
const DATE_SATURDAY = 6
const DATE_SUNDAY = 0

const isDisabled = (date, disabledDates) => {
  if (!disabledDates) {
    return false
  }

  const localDateString = toGermanDateString(date)
  console.log('matching ' + localDateString + ' with ' + disabledDates)
  return disabledDates.indexOf(localDateString) !== -1
}

// weekend includes friday
const isWeekend = date => {
  const day = date.getDay()
  return day === DATE_FRIDAY || day === DATE_SATURDAY || day === DATE_SUNDAY
}

// weekday excludes friday
const isNotWeekend = date => !isWeekend(date)

export { isDisabled, isWeekend, isNotWeekend }
