<template>
  <div id="app">
    <form>
      <textarea id="incoming"></textarea>
      <button type="submit">submit</button>
    </form>
    <poker-description></poker-description>
    <poker-counters 
      v-bind:connected="connected"
      v-bind:submitted="submitted"></poker-counters>
    <poker-card-state 
      v-bind:activeValue="activeValue"></poker-card-state>
    <poker-result
      v-bind:low="result.low"
      v-bind:high="result.high"
      v-bind:median="result.median"></poker-result>
  </div>
</template>

<script>
import PokerDescription from './components/poker-description'
import PokerCounters from './components/poker-counters'
import PokerCardState from './components/poker-card-state'
import PokerResult from './components/poker-result'

import store from './store'

export default {
  name: 'app',
  data () {
    return store.state
  },
  components: {
    PokerDescription,
    PokerCounters,
    PokerCardState,
    PokerResult
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
