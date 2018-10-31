<template>
  <div id="basic-vue-chat--wrapper">
    <basic-vue-chat-component :new-message="message" />
  </div>
</template>

<script>
import BasicVueChatComponent from './components/basic-vue-chat/BasicVueChatComponent.vue'

export default {
  name: 'BasicVueChat',
  components: {
    BasicVueChatComponent
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
