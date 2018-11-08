import { shallowMount } from '@vue/test-utils'
import BasicVueChat from '@/components/basic-vue-chat/BasicVueChat.vue'

describe('BasicVueChat.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Team Test'
    const wrapper = shallowMount(BasicVueChat, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
