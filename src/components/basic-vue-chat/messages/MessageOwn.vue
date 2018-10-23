<template>
  <div
    class="message--own">
    <div class="message__date">
      {{ date }}
    </div>
    <div class="message__contents">
      {{ contents }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageOwn',
  props: {
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
