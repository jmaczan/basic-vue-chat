<template>
  <div id="app">
    <basic-vue-chat :new-message="message" />
  </div>
</template>

<script>
import BasicVueChat from './components/basic-vue-chat/BasicVueChat.vue'

export default {
  name: 'App',
  components: {
    BasicVueChat
  },
  data: function () {
    return {
      message: {}
    }
  }
}
</script>

<style lang="scss">
</style>
