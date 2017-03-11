<template>
  <div>
    <div>test</div>
    <poker-card 
      v-bind:cardValues="fib"
      v-bind:activeValue="activeValue"
      v-on:pokerToggle="catcher">
    </poker-card>
  </div>
</template>

<script>
import pokerCardConntainer from './poker-card-container'
import store from '../store'

export default {
  name: 'poker-card-state',
  props: ['activeValue'],
  data () {
    return {
      fib: [1, 2, 3, 5, 8, 13]
    }
  },
  computed: {
    cardIsActive (val) {
      console.log('calc', val)
      if (val === this.activeValue) return true
      return false
    }
  },
  components: {
    'poker-card': pokerCardConntainer
  },
  methods: {
    catcher (value) {
      store.setActiveCard(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
