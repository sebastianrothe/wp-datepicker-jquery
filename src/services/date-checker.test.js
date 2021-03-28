import { expect } from '@esm-bundle/chai'

import DateChecker from './date-checker'
import config from '../config'

describe('a datechecker', () => {
  before(() => {
    expect(config.allowOnlyWeekends).to.be.not.ok
  })

  it('should be instantiated', () => {
    const checker = new DateChecker()
    expect(checker).to.be.ok
  })

  it('should return true, if not dates are disabled', () => {
    const checker = new DateChecker()
    const now = Date.now()
    expect(checker.isAvailable(now)).to.be.ok
  })

  it('should return true, if all days are allowed, but no dates are disabled', () => {
    const checker = new DateChecker()

    const monday = new Date(2019, 2, 4) // month is zero-based
    expect(monday.getDay()).to.equal(1)

    const [available] = checker.isAvailable(monday)
    expect(available).to.be.ok

    const sunday = new Date(2019, 2, 3) // month is zero-based
    expect(sunday.getDay()).to.equal(0)

    const [available2] = checker.isAvailable(sunday)
    expect(available2).to.be.ok
  })

  it('should return false, if date given is disabled', () => {
    const friday = new Date(2019, 2, 8) // month is zero-based
    const disabled = [friday, new Date(2019, 2, 1)]
    const checker = new DateChecker(disabled)

    expect(friday.getDay()).to.equal(5)
    const [available] = checker.isAvailable(friday)
    expect(available).to.be.not.ok
  })

  it('should return true, if date given is not disabled', () => {
    const disabled = [new Date(2019, 2, 7)]
    const checker = new DateChecker(disabled)
    const friday = new Date(2019, 2, 8) // month is zero-based
    expect(friday.getDay()).to.equal(5)

    const [available] = checker.isAvailable(friday)
    expect(available).to.be.ok
  })

  describe('when disabled dates are english strings', () => {
    before(() => {
      expect(config.allowOnlyWeekends).to.be.not.ok
    })

    it('should be available, if date given is not disabled', () => {
      const disabled = ['2019-03-09']
      const checker = new DateChecker(disabled)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).to.equal(5)

      const [available] = checker.isAvailable(friday)
      expect(available).to.be.ok
    })

    it('does not work, if date given is disabled', () => {
      const disabled = ['2019-03-08']
      const checker = new DateChecker(disabled)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).to.equal(5)

      const [available] = checker.isAvailable(friday)
      expect(available).to.be.ok
    })
  })

  describe('when disabled dates are german strings', () => {
    before(() => {
      expect(config.allowOnlyWeekends).to.be.not.ok
    })

    it('should return true, if date given is not disabled', () => {
      const disabled = ['09.03.2019']
      const checker = new DateChecker(disabled, true)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).to.equal(5)

      const [available] = checker.isAvailable(friday)
      expect(available).to.be.ok
    })

    it('should return false, if date given is disabled', () => {
      const disabled = ['08.03.2019']
      const checker = new DateChecker(disabled, true)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).to.equal(5)

      const [available] = checker.isAvailable(friday)
      expect(available).to.be.not.ok
    })
  })

  describe('with a config, where only weekends and friday is allowed', () => {
    before(() => {
      config.allowOnlyWeekends = true
      expect(config.allowOnlyWeekends).to.be.ok
    })

    it('should return false, if only weekends are allowed, but weekday is given', () => {
      const checker = new DateChecker()
      const monday = new Date(2019, 2, 4) // month is zero-based
      expect(monday.getDay()).to.equal(1)

      const [available] = checker.isAvailable(monday)
      expect(available).to.be.not.ok
    })

    it('should return true, if only weekends are allowed, but weekend is given', () => {
      const checker = new DateChecker()
      const sunday = new Date(2019, 2, 3) // month is zero-based
      expect(sunday.getDay()).to.equal(0)

      const [available] = checker.isAvailable(sunday)
      expect(available).to.be.ok
    })

    it('should return true, if only weekends are allowed and friday is given', () => {
      const checker = new DateChecker()
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).to.equal(5)

      const [available] = checker.isAvailable(friday)
      expect(available).to.be.ok
    })

    it('should return false, if date given is disabled', () => {
      const friday = new Date(2019, 2, 8) // month is zero-based
      const disabled = [friday, new Date(2019, 2, 1)]
      const checker = new DateChecker(disabled)

      expect(friday.getDay()).to.equal(5)
      const [available] = checker.isAvailable(friday)
      expect(available).to.be.not.ok
    })

    it('should return true, if date given is not disabled', () => {
      const disabled = [new Date(2019, 2, 7)]
      const checker = new DateChecker(disabled)
      const friday = new Date(2019, 2, 8) // month is zero-based
      expect(friday.getDay()).to.equal(5)

      const [available] = checker.isAvailable(friday)
      expect(available).to.be.ok
    })
  })
})
