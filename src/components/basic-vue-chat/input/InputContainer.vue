<template>
  <section>
    <slot name="input-field">
      <input-field />
    </slot>
    <slot name="input-button">
      <input-button />
    </slot>
  </section>
</template>

<script>
import moment from 'moment'
import InputField from 'InputField'
import InputButton from 'InputButton'

export default {
  name: 'InputContainer',
  components: {
    InputField,
    InputButton
  },
  methods: {
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

      this.feed.push({ id: 1, author: 'Person', contents: this.message, date: moment().format('H:m:s') })

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

<style>

</style>
