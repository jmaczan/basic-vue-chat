<template>
  <div class="input__container">
    <slot name="input-field">
      <input-field
        v-model="message"
        @newOwnMessage="onNewOwnMessage" />
    </slot>
    <slot name="input-button">
      <input-button @newOwnMessage="onNewOwnMessage" />
    </slot>
  </div>
</template>

<script>
import InputField from './InputField.vue'
import InputButton from './InputButton.vue'

export default {
  name: 'InputContainer',
  components: {
    InputField,
    InputButton
  },
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    onNewOwnMessage () {
      if (!this.message || this.message === '') {
        return
      }

      this.$emit('newOwnMessage', this.message)

      this.message = ''
    }
  }
}
</script>
