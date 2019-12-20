import toDate from './toDate.js'

function getDay(date) {
  if (!date) throw new Error('Date is required')

  return toDate(date).getDay()
}

export default getDay
