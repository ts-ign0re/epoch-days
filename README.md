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
import { toEpochDate } from 'epoch-days';

console.log(toEpochDate(Date.now()));

```

#### toEpochDate(dayNumber)
Returns milliseconds of the beginning of the day equal to midnight in your time zone. Convert the time to the correct time zone for a more accurate calculation.

`dayNumber: number`

```
import { fromEpochDate } from 'epoch-days';

const DEMO_EPOCH_DAY = 18246;

console.log(fromEpochDate(DEMO_EPOCH_DAY));

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

