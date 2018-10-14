<template>
  <div class="basic-vue-chat">
    <section class="window">
      <header class="window__header__container">
        {{ title }}
      </header>
      <section class="window__messages__container">
        <div v-bind:key="messageKey(message)" v-for="message in feed">
          <div v-if="message.id === mockData.authorId" class="message--own">
            <div class="message__date">
              {{ message.date }}
            </div>
            <div class="message__contents">
              {{ message.contents }}
            </div>
          </div>
          <div v-else class="message--foreign">
            <div class="message__author">
              {{ message.author }}
            </div>
            <div class="message__contents">
              {{ message.contents }}
            </div>
            <div class="message__date">
              {{ message.date }}
            </div>
          </div>
        </div>
      </section>
      <div class="window__input__container">
        <div class="input__field">
          <input
            type="text"
            name="message"
            aria-placeholder="Type message..."
            placeholder="Type message..."><br>
        </div>
        <div class="input__button">
          Send
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BasicVueChat',
  data: function () {
    return {
      mockData: {
        authorId: 1
      }
    }
  },
  props: {
    title: {
      type: String,
      default: 'Team Maczan',
      required: false
    },
    feed: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            author: 'Gruby',
            contents: 'hi there',
            date: '16:30'
          },
          {
            id: 1,
            author: 'Chudy',
            contents: 'hello',
            date: '16:30'
          },
          {
            id: 1,
            author: 'Chudy',
            contents: 'lol',
            date: '16:31'
          }
        ]
      },
      required: false
    }
  },
  methods: {
    messageKey (message) {
      return message.contents + message.date;
    }
  }
}
</script>

<style lang="scss">

</style>
