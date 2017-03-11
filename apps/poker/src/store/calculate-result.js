// @flow

type Result = {
    high: number,
    low: number,
    median: number
}

type CalculateResult = (resultList: Array<number>) => Result

const calculateResult: CalculateResult = resultList => {
  const results = resultList.concat()
  results.sort((a, b) => a - b)

  const midIndex = results.length / 2

  const medianIndex = (midIndex % 2) ? Math.ceil(midIndex) : midIndex + 1

  return {
    low: results[0],
    high: results[results.length - 1],
    median: results[medianIndex]
  }
}

export default calculateResult
