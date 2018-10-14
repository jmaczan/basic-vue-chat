<template>
  <div class="basic-vue-chat">
    <section class="window">
      <header class="window__header__container">
        Team Maczan
      </header>
      <section class="window__messages__container">
        <div class="message--foreign">
          <div class="message__author">
            {{ feed[0].author }}
          </div>
          <div class="message__contents">
            {{ feed[0].contents }}
          </div>
          <div class="message__date">
            {{ feed[0].date }}
          </div>
        </div>
        <div class="message--own">
          <div class="message__date">
            {{ feed[1].date }}
          </div>
          <div class="message__contents">
            {{ feed[1].contents }}
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
  props: {
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
  }
}
</script>

<style lang="scss">

</style>
