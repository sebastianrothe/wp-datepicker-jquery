import { toGermanDateString } from "../locale/de-DE"

const DATE_FRIDAY = 5
const DATE_SATURDAY = 6
const DATE_SUNDAY = 0

const isDisabled = (date, disabledDates, convertToLocal = false) => {
  if (!disabledDates || disabledDates.length === 0) {
    return false
  }

  const localDateString = convertToLocal ? toGermanDateString(date) : date
  console.info("matching " + localDateString + " with " + disabledDates)
  return disabledDates.indexOf(localDateString) !== -1
}

// weekend includes friday
const isWeekend = (date) => {
  if (!date || !date.getDay) {
    return false
  }

  const day = date.getDay()
  return day === DATE_FRIDAY || day === DATE_SATURDAY || day === DATE_SUNDAY
}

// weekday excludes friday
const isNotWeekend = (date) => !isWeekend(date)

export { isDisabled, isWeekend, isNotWeekend }
