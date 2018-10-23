<template>
  <div
    class="input__button"
    @click="send">
    Send
  </div>
</template>

<script>

export default {
  name: 'InputButton',
  methods: {
    send (event) {
      this.$emit('newOwnMessage')
    }
  }
}
</script>

<style>

</style>
