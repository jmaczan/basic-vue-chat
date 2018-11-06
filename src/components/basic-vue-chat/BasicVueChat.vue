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
          <messages-list class="messages-list" />
        </slot>
      </section>
      <div class="window__input__container">
        <slot name="input-container">
          <input-container @newOwnMessage="onNewOwnMessage" />
        </slot>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import { mapMutations, mapState } from 'vuex'
import { storeHelpers } from '../../helpers/store.js'
import { scrollToBottom } from '../../helpers/scroll.js'
import { MODULE, SET_FEED, PUSH_TO_FEED, SET_AUTHOR_ID, RESET_NEW_MESSAGE } from '../../store/actions/general.js'
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
    initialFeed: {
      type: Array,
      default: function () {
        return []
      },
      required: false
    },
    initialAuthorId: {
      type: Number,
      default: -1,
      required: false
    },
    newMessage: {
      type: Object,
      default: function () {
        return {}
      },
      required: false
    }
  },
  computed: {
    ...mapState({
      authorId: state => state.general.authorId,
      message: state => state.general.message
    })
  },
  watch: {
    newMessage: function (newValue, oldValue) {
      this.pushToFeed(newValue)
      scrollToBottom()
    }
  },
  mounted () {
    if (this.attachMock) {
      import('./mocks/mock-messages-list.js').then(mockData => {
        this.setFeed(mockData.default.feed)
        this.setAuthorId(mockData.default.authorId)
      }).catch(error => {
        console.error('Failed to load mock data from file. ', error)
      })
    } else {
      this.setFeed(this.initialFeed)
      this.setAuthorId(this.initialAuthorId)
    }
  },
  methods: {
    ...mapMutations({
      setFeed: storeHelpers.concat(MODULE, SET_FEED),
      pushToFeed: storeHelpers.concat(MODULE, PUSH_TO_FEED),
      setAuthorId: storeHelpers.concat(MODULE, SET_AUTHOR_ID),
      resetNewMessage: storeHelpers.concat(MODULE, RESET_NEW_MESSAGE)
    }),
    onNewOwnMessage (message) {
      const newOwnMessage = {
        id: this.authorId,
        contents: this.message,
        date: moment().format('H:m:s')
      }

      this.pushToFeed(newOwnMessage)

      scrollToBottom()

      this.$emit('newOwnMessage', newOwnMessage)

      this.resetNewMessage()
    }
  }

}
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";
</style>
