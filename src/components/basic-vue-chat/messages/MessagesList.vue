<template>
  <transition-group
    name="messages-list"
    tag="div">
    <div
      v-for="(message, index) in feed"
      :key="index"
      class="messages-list-item">
      <message-own
        v-if="message.id === authorId"
        :date="message.date"
        :image-url="message.imageUrl"
        :contents="message.contents" />
      <message-foreign
        v-else
        :author="message.author"
        :date="message.date"
        :image-url="message.imageUrl"
        :contents="message.contents" />
    </div>
  </transition-group>
</template>

<script>
import MessageOwn from './MessageOwn.vue'
import MessageForeign from './MessageForeign.vue'

export default {
  name: 'MessagesList',
  components: {
    MessageOwn,
    MessageForeign
  },
  props: {
    feed: {
      type: Array,
      default: function () {
        return []
      },
      required: false
    },
    authorId: {
      type: Number,
      default: 0,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
