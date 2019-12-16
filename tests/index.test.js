/*
 * Author: Tronin D.
 * Github: @tronin
 * Year  : 2019
 */

import moment from 'moment-timezone'
import { toEpochDate, fromEpochDate, getPreviousWorkday } from '../src'

const TIMEZONE = 'Etc/GMT-0'
moment.tz.setDefault(TIMEZONE)

const DATE = moment.tz('2019-07-07', TIMEZONE).endOf('day')
const DATE_IN_MS = DATE.clone().tz(TIMEZONE).valueOf()
const EPOCH_DAY = 18084

describe('toEpochDate', () => {
  it('should return valid epoch day', () => {
    expect(toEpochDate(DATE_IN_MS)).toEqual(EPOCH_DAY)
  })

  it('should return valid epoch day for moment object', () => {
    const epoch = toEpochDate(DATE.clone().tz(TIMEZONE))
    expect(epoch > 0).toBe(true)
  })

  it('should return NaN for string', () => {
    expect(toEpochDate(DATE.clone().tz(TIMEZONE).toString())).toBe(NaN)
  })
})

describe('fromEpochDate', () => {
  it('should return valid date from epoch day', () => {
    expect(fromEpochDate(EPOCH_DAY)).toEqual(1562457600000)
  })

  it('should return NaN if epoch date is invalid', () => {
    expect(fromEpochDate(DATE.clone().tz(TIMEZONE).toString())).toBe(NaN)

  })
})

describe('getPreviousWorkday', () => {
  it('should return friday if today is monday', () => {
    const prev = getPreviousWorkday('2019-08-05').toISOString()
    expect(prev).toEqual('2019-08-02T00:00:00.000Z')
  })

  it('should return friday if today is sunday', () => {
    const prev = getPreviousWorkday('2019-08-04').toISOString()
    expect(prev).toEqual('2019-08-02T00:00:00.000Z')
  })

  it('should return friday if today is saturday', () => {
    const prev = getPreviousWorkday('2019-08-03').toISOString()
    expect(prev).toEqual('2019-08-02T00:00:00.000Z')
  })

  it('should return moday if today is tuesday', () => {
    const prev = getPreviousWorkday('2019-08-06').toISOString()
    expect(prev).toEqual('2019-08-05T00:00:00.000Z')
  })
})
