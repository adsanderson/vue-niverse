// @flow

type Result = {
  high: number,
  low: number,
  median: number
}

type State = {
  message: string,
  description: string,
  activeValue?: number,
  fib: Array<number>,
  connected: number,
  submitted: number,
  result: Result
}

import setResult from './setResult'

const state: State = {
  message: 'Hello!',
  description: '',
  activeValue: undefined,
  fib: [1, 2, 3, 5, 8, 13],
  connected: 1,
  submitted: 0,
  result: {
    high: -1,
    low: -1,
    median: -1
  }
}

export default {
  debug: true,
  state: state,
  setActiveCard (cardValue: number) {
    if (!state.activeValue) {
      state.submitted += 1
    }
    state.activeValue = cardValue
    state.result = setResult(state.connected, state.submitted, [state.activeValue])
  }
}
