import DateChecker from './DateChecker'
import config from '../config'

describe('a datechecker', () => {
  beforeAll(() => {
    expect(config.allowOnlyWeekends).toBeFalsy()
  })

  it('should be instantiated', () => {
    const checker = new DateChecker()
    expect(checker).toBeTruthy()
  })

  it('should return true, if not dates are disabled', () => {
    const checker = new DateChecker()
    const now = Date.now()
    expect(checker.isAvailable(now)).toBeTruthy()
  })

  it('should return true, if all days are allowed, but no dates are disabled', () => {
    const checker = new DateChecker()

    const monday = new Date(2019, 2, 4) // month is zero-based
    expect(monday.getDay()).toBe(1)

    const [available] = checker.isAvailable(monday)
    expect(available).toBeTruthy()

    const sunday = new Date(2019, 2, 3) // month is zero-based
    expect(sunday.getDay()).toBe(0)

    const [available2] = checker.isAvailable(sunday)
    expect(available2).toBeTruthy()
  })

  it('should return false, if date given is disabled', () => {
    const friday = new Date(2019, 2, 8) // month is zero-based
    const disabled = [friday, new Date(2019, 2, 1)]
    const checker = new DateChecker(disabled)

    expect(friday.getDay()).toBe(5)
    const [available] = checker.isAvailable(friday)
    expect(available).toBeFalsy()
  })

  it('should return true, if date given is not disabled', () => {
    const disabled = [new Date(2019, 2, 7)]
    const checker = new DateChecker(disabled)
    const friday = new Date(2019, 2, 8) // month is zero-based
    expect(friday.getDay()).toBe(5)

    const [available] = checker.isAvailable(friday)
    expect(available).toBeTruthy()
  })

  describe('when disabled dates are english strings', () => {
    beforeAll(() => {
      expect(config.allowOnlyWeekends).toBeFalsy()
    })

    it('should be available, if date given is not disabled', () => {
      const disabled = ['2019-03-09']
      const checker = new DateChecker(disabled)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).toBe(5)

      const [available] = checker.isAvailable(friday)
      expect(available).toBeTruthy()
    })

    it('does not work, if date given is disabled', () => {
      const disabled = ['2019-03-08']
      const checker = new DateChecker(disabled)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).toBe(5)

      const [available] = checker.isAvailable(friday)
      expect(available).toBeTruthy()
    })
  })

  describe('when disabled dates are german strings', () => {
    beforeAll(() => {
      expect(config.allowOnlyWeekends).toBeFalsy()
    })

    it('should return true, if date given is not disabled', () => {
      const disabled = ['09.03.2019']
      const checker = new DateChecker(disabled, true)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).toBe(5)

      const [available] = checker.isAvailable(friday)
      expect(available).toBeTruthy()
    })

    it('should return false, if date given is disabled', () => {
      const disabled = ['08.03.2019']
      const checker = new DateChecker(disabled, true)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).toBe(5)

      const [available] = checker.isAvailable(friday)
      expect(available).toBeFalsy()
    })
  })

  describe('with a config, where only weekends and friday is allowed', () => {
    beforeAll(() => {
      config.allowOnlyWeekends = true
      expect(config.allowOnlyWeekends).toBeTruthy()
    })

    it('should return false, if only weekends are allowed, but weekday is given', () => {
      const checker = new DateChecker()
      const monday = new Date(2019, 2, 4) // month is zero-based
      expect(monday.getDay()).toBe(1)

      const [available] = checker.isAvailable(monday)
      expect(available).toBeFalsy()
    })

    it('should return true, if only weekends are allowed, but weekend is given', () => {
      const checker = new DateChecker()
      const sunday = new Date(2019, 2, 3) // month is zero-based
      expect(sunday.getDay()).toBe(0)

      const [available] = checker.isAvailable(sunday)
      expect(available).toBeTruthy()
    })

    it('should return true, if only weekends are allowed and friday is given', () => {
      const checker = new DateChecker()
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).toBe(5)

      const [available] = checker.isAvailable(friday)
      expect(available).toBeTruthy()
    })

    it('should return false, if date given is disabled', () => {
      const friday = new Date(2019, 2, 8) // month is zero-based
      const disabled = [friday, new Date(2019, 2, 1)]
      const checker = new DateChecker(disabled)

      expect(friday.getDay()).toBe(5)
      const [available] = checker.isAvailable(friday)
      expect(available).toBeFalsy()
    })

    it('should return true, if date given is not disabled', () => {
      const disabled = [new Date(2019, 2, 7)]
      const checker = new DateChecker(disabled)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).toBe(5)

      const [available] = checker.isAvailable(friday)
      expect(available).toBeTruthy()
    })
  })
})
