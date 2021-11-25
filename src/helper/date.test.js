import { expect } from "@esm-bundle/chai"

import { isWeekend, isNotWeekend } from "./date"

describe("DateHelper", () => {
  describe("has functions for weekends", () => {
    it("should return true, for weekends", () => {
      const saturday = new Date(2019, 2, 9)
      expect(saturday.getDay()).to.equal(6)
      expect(isWeekend(saturday)).to.be.ok
      expect(isNotWeekend(saturday)).to.be.not.ok

      const sunday = new Date(2019, 2, 10)
      expect(sunday.getDay()).to.equal(0)
      expect(isWeekend(sunday)).to.be.ok
      expect(isNotWeekend(sunday)).to.be.not.ok
    })

    it("should return true, for fridays", () => {
      const friday = new Date(2019, 2, 8)
      expect(friday.getDay()).to.equal(5)
      expect(isWeekend(friday)).to.be.ok
      expect(isNotWeekend(friday)).to.be.not.ok
    })

    it("should return false, for weekdays", () => {
      const monday = new Date(2019, 2, 4)
      expect(monday.getDay()).to.equal(1)
      expect(isWeekend(monday)).to.be.not.ok
      expect(isNotWeekend(monday)).to.be.ok

      const thursay = new Date(2019, 2, 5)
      expect(thursay.getDay()).to.equal(2)
      expect(isWeekend(thursay)).to.be.not.ok
      expect(isNotWeekend(thursay)).to.be.ok

      const wednesday = new Date(2019, 2, 6)
      expect(wednesday.getDay()).to.equal(3)
      expect(isWeekend(wednesday)).to.be.not.ok
      expect(isNotWeekend(wednesday)).to.be.ok

      const thursday = new Date(2019, 2, 7)
      expect(thursday.getDay()).to.equal(4)
      expect(isWeekend(thursday)).to.be.not.ok
      expect(isNotWeekend(thursday)).to.be.ok
    })

    it("should return false for german strings", () => {
      const friday = "08.03.2019"
      expect(isWeekend(friday)).to.be.not.ok
      expect(isNotWeekend(friday)).to.be.ok
    })

    it("should return true for english strings", () => {
      const friday = new Date("2019-03-08")
      expect(friday.getDay()).to.equal(5)
      expect(isWeekend(friday)).to.be.ok
      expect(isNotWeekend(friday)).to.be.not.ok
    })
  })
})
