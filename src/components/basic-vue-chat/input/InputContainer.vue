<template>
  <div class="input__container">
    <img
      v-show="file"
      :src="imagePreview"
      class="image--uploaded">
    <slot name="input-field">
      <input-field
        v-model="message"
        @newOwnMessage="onNewOwnMessage" />
    </slot>
    <div class="features__container">
      <div class="input-images-upload">
        <div
          id="image"
          ref="image"
          type="file"
          class="image"
          accept="image/*"
          @change="handleFileUpload()">
          <label for="image">
            <font-awesome-icon icon="paperclip" />
          </label>
        </div>
      </div>
      <div class="input-images-upload input-emoji-picker__icon">
        <div
          id="emoji"
          @click="openEmojiPicker">
          <label for="emoji">
            <font-awesome-icon icon="smile" />
          </label>
        </div>
      </div>
      <div
        :class="{ visible: !toggleEmojiPicker }"
        class="input-emoji-picker__container">
        <picker
          :show-preview="false"
          :show-skin-tones="false"
          :show-categories="false"
          :show-search="false"
          native
          @select="emojiPicked" />
      </div>
      <slot name="features" />
    </div>
    <slot name="input-button">
      <input-button @newOwnMessage="onNewOwnMessage" />
    </slot>
  </div>
</template>

<script>
import InputField from './InputField.vue'
import InputButton from './InputButton.vue'
import { Picker } from 'emoji-mart-vue'

export default {
  name: 'InputContainer',
  components: {
    InputField,
    InputButton,
    Picker
  },
  props: {
    toggleEmojiPicker: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: function () {
    return {
      message: '',
      file: undefined,
      imagePreview: ''
    }
  },
  methods: {
    onNewOwnMessage () {
      if ((!this.message || this.message === '') && !this.file) {
        return
      }

      this.$emit('newOwnMessage', this.message, this.file, this.imagePreview)

      this.message = ''

      this.file = undefined

      this.imagePreview = ''
    },
    handleFileUpload () {
      this.file = this.$refs.image.files[0]
      let reader = new FileReader()

      reader.addEventListener(
        'load',
        function () {
          this.imagePreview = reader.result
        }.bind(this),
        false
      )

      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file)
        }
      }
    },
    openEmojiPicker () {
      this.$emit('openEmojiPicker', true)
    },
    emojiPicked (emoji) {
      this.message += emoji.native
    }
  }
}
</script>

<style lang="scss" scoped>
.visible {
  display: none;
}
</style>
