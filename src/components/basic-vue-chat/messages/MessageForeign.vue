<template>
  <div
    class="message--foreign">
    <div class="message__author">
      {{ author }}
    </div>
    <div class="message__contents">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt=""
        style="width: 100%" >
      {{ contents }}
    </div>
    <div class="message__date">
      {{ date }}
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
    imageUrl: {
      type: String,
      default: '',
      required: false
    },
    contents: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style>

</style>
