<template>
  <div>
    <div>test</div>
    <poker-card 
      v-bind:cardValues="fib"
      v-bind:activeIndex=0
      v-on:pokerToggle="catcher">
    </poker-card>
  </div>
</template>

<script>
export default {
  name: 'poker-card-state',
  data() {
    return {
      fib: [1, 2, 3, 5, 8, 13]
    }
  },
  components: {
    'poker-card': () => import('./poker-card-container')
  },
  methods: {
    catcher(value) {
      let fib = this.fib;
      this.fib = fib.concat(21)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>