function toDate(argument) {
  if (argument instanceof Date || typeof argument === 'object' && argument.toString() === '[object Date]') {
    return new Date(argument.getTime())
  } else if (typeof argument === 'number' || argument.toString() === '[object Number]') {
    return new Date(argument)
  } else {
    throw new Error('Date must be a number or Date instance')
  }
}


export default toDate
