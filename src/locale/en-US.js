import { padZero } from '../helper'

const toUSDateString = date => {
  // getDate() returns the day of the month, where as getDay() returns which day of the week it is
  const day = padZero(date.getDate())
  const month = padZero(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}

const toUSTimeString = date => {
  const hour = padZero(date.getHours())
  const minute = padZero(date.getMinutes())
  const isAmPm = hour >= 12
  const ampm = isAmPm ? 'PM' : 'AM'
  const usHour = hour > 12 ? hour - 12 : hour

  return `${usHour}:${minute} ${ampm}`
}

export { toUSDateString, toUSTimeString }
