<template>
  <div id="app">
    <basic-vue-chat :new-message="message" />
    <button @click="pushMessage">Push message</button>
  </div>
</template>

<script>
import BasicVueChat from '@/components/basic-vue-chat/BasicVueChat.vue'
import moment from 'moment'

export default {
  name: 'App',
  components: {
    BasicVueChat
  },
  data: function () {
    return {
      message: {}
    }
  },
  methods: {
    pushMessage () {
      this.message = {
        id: 0,
        author: 'Person',
        contents: 'hi there',
        date: moment().format('H:m:s')
      }
    }
  }
}
</script>

<style lang="scss">
</style>
