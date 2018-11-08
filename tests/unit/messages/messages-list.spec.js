import { shallowMount } from '@vue/test-utils'
import MessagesList from '@/components/basic-vue-chat/messages/MessagesList.vue'

describe('MessagesList.vue', () => {
  it('renders list', () => {
    const wrapper = shallowMount(MessagesList)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
