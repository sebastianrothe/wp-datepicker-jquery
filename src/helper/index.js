import { toGermanDateString } from '../locale/de-DE'

const ready = fn => {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

const padZero = n => {
  return n < 10 ? '0' + n : n
}

const parseGermanDate = dateString => {
  dateString = dateString || ''

  const createDate = parts => {
    if (!parts || parts.length < 2) {
      console.log('Cannot parse the Date ' + parts)
      return {}
    }

    const day = parts[0]
    // subtract one from the month, because it's range is expected from 0-11
    const month = parts[1] - 1
    const year = parts[2]
    return new Date(year, month, day)
  }

  return createDate(dateString.split('.'))
}

const stringToLocalDate = str => {
  const germanDate = parseGermanDate(str)
  return toGermanDateString(germanDate)
}

const cleanDisabledDateString = dirtyString => {
  return jQuery
    .trim(dirtyString)
    .replace(/ /g, '')
    .replace(/\r\n/g, '\n')
}

// clean, split and parseToLocal
const transformDateLinesToArray = lines => {
  const splittedCleanedLines = cleanDisabledDateString(lines).split('\n')
  return splittedCleanedLines.map(stringToLocalDate)
}

export { ready, padZero, transformDateLinesToArray }
