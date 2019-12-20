import toDate from './toDate'

function addDays(date, amount) {
  if (!date || !amount) {
    throw new Error('addDays required 2 arguments', { date, amount })
  }
  const day = toDate(date)
  const result = day.setDate(day.getDate() + parseInt(amount, 10))

  return toDate(result)
}

export default addDays
