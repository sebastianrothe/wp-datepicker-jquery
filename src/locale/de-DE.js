import { padZero } from '../helper'

const toGermanDateString = date => {
  // getDate() returns the day of the month, where as getDay() returns which day of the week it is
  const day = padZero(date.getDate())
  const month = padZero(date.getMonth() + 1)
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const toGermanTimeString = date => {
  const hour = padZero(date.getHours())
  const minute = padZero(date.getMinutes())

  return `${hour}:${minute}`
}

export { toGermanDateString, toGermanTimeString }
