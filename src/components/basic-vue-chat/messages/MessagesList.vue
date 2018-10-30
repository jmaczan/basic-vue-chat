<template>
  <transition-group
    name="messages-list"
    tag="div">
    <div
      v-for="message in feed"
      :key="messageKey(message)"
      class="messages-list-item">
      <message-own
        v-if="message.id === authorId"
        :date="message.date"
        :contents="message.contents" />
      <message-foreign
        v-else
        :author="message.author"
        :date="message.date"
        :contents="message.contents" />
    </div>
  </transition-group>
</template>

<script>
import { mapState } from 'vuex'
import MessageOwn from './MessageOwn.vue'
import MessageForeign from './MessageForeign.vue'

export default {
  name: 'MessagesList',
  components: {
    MessageOwn,
    MessageForeign
  },
  computed: {
    ...mapState({
      feed: state => state.general.feed,
      authorId: state => state.general.authorId
    })
  },
  methods: {
    messageKey (message) {
      return message.contents + message.date
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
