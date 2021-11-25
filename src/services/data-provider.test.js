import chai, { expect } from "@esm-bundle/chai"
import sinon from "sinon"
import sinonChai from "sinon-chai"

import DataProvider from "./data-provider"
import config from "../config"
import { toGermanDateString } from "../locale/de-DE"

chai.should()
chai.use(sinonChai)

describe("a dataprovider", () => {
  let requests = []

  before("mock xhr", () => {
    XMLHttpRequest = sinon.useFakeXMLHttpRequest()
    XMLHttpRequest.onCreate = (xhr) => {
      requests.push(xhr)
    }
  })

  beforeEach("reset requests", () => {
    requests = []
  })

  after("reset xhr", () => {
    XMLHttpRequest.restore()
  })

  before(() => {
    expect(config.allowOnlyWeekends).to.be.not.ok
    expect(config.dataApi).to.be.ok
    expect(config.dataApi).to.equal(
      "//gruseltour-berlin.de/wordpress/wp-content/themes/gruseltour-berlin-eighteen/data/data.txt"
    )
  })

  it("should be instantiated", () => {
    const provider = new DataProvider()
    expect(provider).to.be.ok
  })

  it("should return today in an array, when using dummy data", () => {
    const today = toGermanDateString(new Date())
    const provider = new DataProvider()
    const result = provider.useDummyData()
    expect(result).to.be.ok
    expect(result.length).to.equal(1)

    const [item] = result
    expect(item).to.equal(today)
  })

  it("should return fetch data", () => {
    const callback = sinon.spy()
    const provider = new DataProvider()

    provider.fetch(callback)
    requests.should.have.lengthOf(1)

    const data = ["22.03.2021", "24.03.2021"]

    requests[0].respond(
      200,
      { "Content-Type": "application/txt" },
      data.join("\n")
    )

    callback.should.have.been.calledWith(data)
  })
})
