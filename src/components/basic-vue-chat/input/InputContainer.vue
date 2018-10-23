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
import InputField from './InputField'
import InputButton from './InputButton'
import { mapMutations } from 'vuex'
import { storeHelpers } from '@/helpers/store.js'
import { MODULE, SET_NEW_MESSAGE } from '@/store/actions/general.js'

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
    ...mapMutations({
      setNewMessage: storeHelpers.concat(MODULE, SET_NEW_MESSAGE)
    }),
    onNewOwnMessage () {
      if (!this.message || this.message === '') {
        return
      }

      this.setNewMessage(this.message)

      this.message = ''

      this.$emit('newOwnMessage')
    }
  }
}
</script>

<style>

</style>
