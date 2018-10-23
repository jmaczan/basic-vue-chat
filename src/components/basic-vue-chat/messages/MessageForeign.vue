<template>
  <div

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
</template>

<script>
export default {
  name: 'MessageForeign',
  props: {
    author: {
      type: String,
      default: 'Person',
      required: false
    },
    date: {
      type: String,
      default: '16:30:00',
      required: false
    },
    contents: {
      type: String,
      default: 'hello',
      required: false
    }
  }
}
</script>

<style>

</style>
