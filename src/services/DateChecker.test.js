import DateChecker from './DateChecker'
import config from '../config'

describe('a datechecker', () => {
  it('should be instantiated', () => {
    const checker = new DateChecker()
    expect(checker).toBeTruthy()
  })
})
