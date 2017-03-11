<template>
  <div class="poker-card" v-bind:class="{ 'poker-card--active': isActive }" v-on:click="activate">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'poker-card',
  props: ['value', 'isActive'],
  data () {
    return {}
  },
  methods: {
    activate (e) {
      console.log('test', this.value)
      this.$emit('pokerToggle', this.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .poker-card {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size: 3rem;
    border: 1px solid black;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: white;
  }
  .poker-card--active {
    background-color: blue;
  }
</style>
