<template>
  <div class="input__field">
    <input
      v-model="message"
      type="text"
      name="message"
      aria-placeholder="Type message..."
      placeholder="Type message..."
      autofocus
      @keyup="sendIfEnter"><br>
  </div>

</template>

<script>
export default {
  name: 'InputField'
}
</script>

<style>

</style>
