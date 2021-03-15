<template>
  <div class="bg"></div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    // todo
  },
})
</script>

<style lang="scss">
.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -99;
  background-image: url('~@/assets/images/bg.jpg');
  background-position: top;
  background-size: cover;
  left: 0;
  top: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
