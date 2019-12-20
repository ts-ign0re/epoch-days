import { setDay } from 'date-fns'

import getDay from './getDay'
import addDays from './addDays'

const DAY_MS = 1000 * 60 * 60 * 24

export function toEpochDate(timestamp) {
  return Math.floor(timestamp / DAY_MS)
}

export function fromEpochDate(date) {
  return Math.floor(date * DAY_MS)
}

export function getPreviousWorkday(date) {
  // Based on the current day, handle accordingly

  const now = date ? new Date(date) : new Date()

  const today = getDay(now)

  switch (today) {
    // If it is Monday (1),Saturday(6), or Sunday (0), Get the previous Friday (5)
    // and ensure we are on the previous week
    case 0:
    case 1:
    case 6:
      return setDay(addDays(now, -6), 5)
      // If it any other weekend, just return the previous day
    default:
      return addDays(now, -1)
  }
}
