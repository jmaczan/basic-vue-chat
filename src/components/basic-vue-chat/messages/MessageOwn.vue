<template>
  <div
    class="message--own">
    <div class="message__date">
      {{ date }}
    </div>
    <div class="message__contents">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt=""
        style="width: 100%" >
      {{ contents }}
    </div>
  </div>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: 'MessageOwn',
  components: {
    Emoji
  },
  props: {
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
