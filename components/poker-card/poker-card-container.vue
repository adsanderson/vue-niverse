<template>
  <div class="poker-card-container">
    <poker-card 
      v-for="val in cardValues" 
      v-bind:value="val" 
      v-bind:isActive="false"
      v-on:pokerToggle="toggle"></poker-card>      
  </div>
</template>

<script>
export default {
  name: 'poker-card-container',
  props: ['cardValues', 'selectedIndex'],
  data() {
    return {}
  },
  components: {
    'poker-card': () => import('./poker-card')
  },
  methods: {
    toggle(value) {
      this.$emit('pokerToggle', arguments)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>