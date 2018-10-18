<template>
  <div class="basic-vue-chat">
    <section class="window">
      <header class="window__header__container">
        {{ title }}
      </header>
      <section
        id="window__messages__container"
        class="window__messages__container"
        style="transition: all 0.5s;">
        <transition-group
          name="messages-list"
          tag="div" >
          <div
            v-for="message in feed"
            :key="messageKey(message)"
            class="messages-list-item">
            <div
              v-if="message.id === mockData.authorId"
              class="message--own">
              <div class="message__date">
                {{ message.date }}
              </div>
              <div class="message__contents">
                {{ message.contents }}
              </div>
            </div>
            <div
              v-else
              class="message--foreign">
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
        </transition-group>
      </section>
      <div class="window__input__container">
        <div class="input__container">
          <div class="input__field">
            <input
              v-model="message"
              type="text"
              name="message"
              aria-placeholder="Type message..."
              placeholder="Type message..."
              autofocus
              @keyup="sendIfEnter"><br>
          </div>
          <div
            class="input__button"
            @click="add">
            Send
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BasicVueChat',
  props: {
    title: {
      type: String,
      default: 'Team Maczan',
      required: false
    }
  },
  data: function () {
    return {
      mockData: {
        authorId: 1
      },
      message: '',
      feed: [
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
    }
  },
  methods: {
    messageKey (message) {
      return message.contents + message.date
    },
    sendIfEnter (event) {
      event.preventDefault()
      if (event.keyCode === 13) {
        this.add()
      }
    },
    add () {
      if (!this.message || this.message === '') {
        return
      }

      this.feed.push({ id: 1, author: 'Gruby', contents: this.message, date: moment().format('H:m:s') })

      this.message = ''

      setTimeout(function () {
        var scrollContainer = document.getElementById('window__messages__container')
        var isScrolledToBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight <= scrollContainer.scrollTop + 1
        if (!isScrolledToBottom) { scrollContainer.scrollTop = scrollContainer.scrollHeight }
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.messages-list-item {
  transition: all 0.2s;
}

.messages-list-enter, .messages-list-leave-to
/* .messages-list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.messages-list-leave-active {
  position: absolute;
}
</style>
