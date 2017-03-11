import calculateResult from '@/store/calculate-result'

describe('calculate-result', () => {
  it('should return the high median number with an odd number of items', () => {
    const initialList = [5, 8, 5, 3, 13]
    const result = calculateResult(initialList)
    expect(result.median).to.equal(8)
    expect(result.low).to.equal(3)
    expect(result.high).to.equal(13)
  })
  it('should return the high median number with an odd number of items', () => {
    const initialList = [8, 1, 3, 5, 1, 8]
    const result = calculateResult(initialList)
    expect(result.median).to.equal(5)
    expect(result.low).to.equal(1)
    expect(result.high).to.equal(8)
  })
})
