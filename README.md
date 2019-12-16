## How to use

### Yarn
```yarn add epoch-days```

### NPM
```npm install --save epoch-days```

## API

#### toEpochDate(millise)
Returns number of a day

`date: number`

```
const TIMEZONE = 'Etc/GMT-0'
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

```

#### toEpochDate(dayNumber)
Returns milliseconds of the beginning of the day equal to midnight in your time zone. Convert the time to the correct time zone for a more accurate calculation.

`dayNumber: number`

```
const TIMEZONE = 'Etc/GMT-0'
const DATE = moment.tz('2019-07-07', TIMEZONE).endOf('day')
const EPOCH_DAY = 18084

describe('fromEpochDate', () => {
  it('should return valid date from epoch day', () => {
    expect(fromEpochDate(EPOCH_DAY)).toEqual(1562457600000)
  })

  it('should return NaN if epoch date is invalid', () => {
    expect(fromEpochDate(DATE.clone().tz(TIMEZONE).toString())).toBe(NaN)

  })
})
```

#### getPreviousWorkday(date)
The function returns the previous working day of the week, adjusted for the weekend.

`date: number` (optional) - Date.now by default

```
it('should returns friday if today is monday', () => {
  const prev = getPreviousWorkday('2019-08-05').toISOString()
  expect(prev).toEqual('2019-08-02T00:00:00.000Z')
})

it('should returns friday if today is sunday', () => {
  const prev = getPreviousWorkday('2019-08-04').toISOString()
  expect(prev).toEqual('2019-08-02T00:00:00.000Z')
})

it('should returns friday if today is saturday', () => {
  const prev = getPreviousWorkday('2019-08-03').toISOString()
  expect(prev).toEqual('2019-08-02T00:00:00.000Z')
})

it('should returns monday if today is tuesday', () => {
  const prev = getPreviousWorkday('2019-08-06').toISOString()
  expect(prev).toEqual('2019-08-05T00:00:00.000Z')
})

```

