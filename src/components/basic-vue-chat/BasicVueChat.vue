<template>
  <div class="basic-vue-chat">
    <section class="window">
      <header class="window__header__container">
        <slot name="header">
          {{ title }}
        </slot>
      </header>
      <section
        id="window__messages__container"
        class="window__messages__container">
        <slot>
          <messages-list
            :feed="feedOrMock"
            :author-id="authorIdOrMock" />
        </slot>
      </section>
      <div class="window__input__container">
        <div class="input__container">
          <slot name="input-container">
            <input-container />
          </slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MessagesList from './messages/MessagesList.vue'
import InputContainer from './input/InputContainer.vue'

export default {
  name: 'BasicVueChat',
  components: {
    MessagesList,
    InputContainer
  },
  props: {
    title: {
      type: String,
      default: 'Team Maczan',
      required: false
    },
    attachMock: {
      type: Boolean,
      default: false,
      required: false
    },
    messagesList: {
      type: Array,
      default: function () {
        return []
      },
      required: false
    },
    authorId: {
      type: Number,
      default: -1,
      required: false
    }
  },

  data: function () {
    return {
      mockData: {
        authorId: -1,
        feed: []
      },
      message: ''
    }
  },
  computed: {
    feedOrMock: function () {
      return this.messagesList && this.messagesList.length > 0 ? this.messagesList : this.mockData.feed
    },
    authorIdOrMock: function () {
      return this.authorId && this.authorId !== -1 ? this.authorId : this.mockData.authorId
    }
  },
  mounted () {
    if (!this.messagesList || this.messagesList.length === 0) {
      import('./mocks/mock-messages-list.js').then(mockData => {
        this.mockData.authorId = mockData.default.authorId
        this.mockData.feed = mockData.default.feed
      })
    }
  }
}
</script>

<style lang="scss">

</style>
