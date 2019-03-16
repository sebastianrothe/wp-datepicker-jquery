import { isWeekend, isNotWeekend } from './date'

describe('DateHelper', () => {
  describe('has functions for weekends', () => {
    it('should return true, for weekends', () => {
      const saturday = new Date(2019, 2, 9)
      expect(saturday.getDay()).toBe(6)
      expect(isWeekend(saturday)).toBeTruthy()
      expect(isNotWeekend(saturday)).toBeFalsy()

      const sunday = new Date(2019, 2, 10)
      expect(sunday.getDay()).toBe(0)
      expect(isWeekend(sunday)).toBeTruthy()
      expect(isNotWeekend(sunday)).toBeFalsy()
    })

    it('should return true, for fridays', () => {
      const friday = new Date(2019, 2, 8)
      expect(friday.getDay()).toBe(5)
      expect(isWeekend(friday)).toBeTruthy()
      expect(isNotWeekend(friday)).toBeFalsy()
    })

    it('should return false, for weekdays', () => {
      const monday = new Date(2019, 2, 4)
      expect(monday.getDay()).toBe(1)
      expect(isWeekend(monday)).toBeFalsy()
      expect(isNotWeekend(monday)).toBeTruthy()

      const thursay = new Date(2019, 2, 5)
      expect(thursay.getDay()).toBe(2)
      expect(isWeekend(thursay)).toBeFalsy()
      expect(isNotWeekend(thursay)).toBeTruthy()

      const wednesday = new Date(2019, 2, 6)
      expect(wednesday.getDay()).toBe(3)
      expect(isWeekend(wednesday)).toBeFalsy()
      expect(isNotWeekend(wednesday)).toBeTruthy()

      const thursday = new Date(2019, 2, 7)
      expect(thursday.getDay()).toBe(4)
      expect(isWeekend(thursday)).toBeFalsy()
      expect(isNotWeekend(thursday)).toBeTruthy()
    })

    it('should return false for german strings', () => {
      const friday = '08.03.2019'
      expect(isWeekend(friday)).toBeFalsy()
      expect(isNotWeekend(friday)).toBeTruthy()
    })

    it('should return true for english strings', () => {
      const friday = new Date('2019-03-08')
      expect(friday.getDay()).toBe(5)
      expect(isWeekend(friday)).toBeTruthy()
      expect(isNotWeekend(friday)).toBeFalsy()
    })
  })
})
