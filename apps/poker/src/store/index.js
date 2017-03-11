// @flow

import setResult from './setResult'
import type { State } from './storeState'

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

// import Peer from 'simple-peer'
// import * as Peer from 'simple-peer'

// var p = new Peer({ initiator: location.hash === '#1', trickle: false })

// p.on('error', function (err) { console.log('error', err) })

// p.on('signal', function (data) {
//   console.log('SIGNAL', JSON.stringify(data))
//   // document.querySelector('#outgoing').textContent = JSON.stringify(data)
// })

// // document.querySelector('form').addEventListener('submit', function (ev) {
// //   ev.preventDefault()
// //   p.signal(JSON.parse(document.querySelector('#incoming').value))
// // })

// p.on('connect', function () {
//   console.log('CONNECT')
//   p.send('whatever' + Math.random())
// })

// p.on('data', function (data) {
//   console.log('data: ' + data)
// })
