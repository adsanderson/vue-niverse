<template>
  <div class="poker-card-container">
    <poker-card 
      v-for="val in cardValues" 
      :key="val"
      v-bind:value="val" 
      v-bind:isActive="cardIsActive(val)"
      v-on:pokerToggle="toggle"></poker-card>      
  </div>
</template>

<script>

import pokerCard from './poker-card'

export default {
  name: 'poker-card-container',
  props: ['cardValues', 'activeValue'],
  data () {
    return {}
  },
  components: {
    'poker-card': pokerCard
  },
  methods: {
    toggle (value) {
      this.$emit('pokerToggle', value)
    },
    cardIsActive (val) {
      if (val === this.activeValue) return true
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
