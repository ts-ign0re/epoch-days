import toDate from './toDate'
import addDays from './addDays'

function toInteger(maybeDate) {
  if (typeof maybeDate === 'string' || typeof maybeDate === 'number') {
    if (typeof parseInt(maybeDate, 10) === 'number') {
      return parseInt(maybeDate, 10)
    }
  }
  throw new Error('The date cannot be parsed')
}

const setDay = (date, day, weekStartsOn) => {
  let defaultWeekStartsOn = weekStartsOn || 0
  let currentDay = toDate(date).getDay()
  let remainder = toInteger(day) % 7
  let dayIndex = (remainder + 7) % 7
  let diff = (dayIndex < defaultWeekStartsOn ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

export default setDay
