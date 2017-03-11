// @flow

export type Result = {
  high: number,
  low: number,
  median: number
}

import calculateResult from './calculate-result'

const defaultResult = {
  high: -1,
  low: -1,
  median: -1
}

type ResultShouldUpdate = (connected: number, submitted: number) => boolean
const resultShouldUpdate: ResultShouldUpdate = (connected, submitted) =>
    connected === submitted

type SetResult = (connected: number, submitted: number, currentValues: Array<number>) => Result
const setResult: SetResult = (connected, submitted, currentValues) =>
    (resultShouldUpdate(connected, submitted)) ? calculateResult(currentValues) : defaultResult

export default setResult
