import DataProvider from './DataProvider'
import config from '../config'
import { toGermanDateString } from '../locale/de-DE'

describe('a dataprovider', () => {
  beforeAll(() => {
    expect(config.allowOnlyWeekends).toBeFalsy()
  })

  it('should be instantiated', () => {
    const provider = new DataProvider()
    expect(provider).toBeTruthy()
  })

  it('should return today in an array, when using dummy data', () => {
    const today = toGermanDateString(new Date())
    const provider = new DataProvider()
    const result = provider.useDummyData()
    expect(result).toBeTruthy()
    expect(result.length).toBe(1)

    const [item] = result
    expect(item).toBe(today)
  })

  it('should return fetch data', done => {
    const callback = data => {
      expect(data).toBeTruthy()
      expect(data.length).toBeGreaterThanOrEqual(1)

      const [item] = data
      expect(item.length).toBeGreaterThanOrEqual(8)
      done()
    }
    const provider = new DataProvider()
    provider.fetch(callback)
  })
})
