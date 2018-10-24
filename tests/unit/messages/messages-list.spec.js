import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MessagesList from '@/components/basic-vue-chat/messages/MessagesList.vue'
import { authorId, feed } from '../mocks/mock-messages-list'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('MessagesList.vue', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      general: {
        authorId: authorId,
        feed: feed
      }
    }
    store = new Vuex.Store({
      state
    })
  })

  it('renders elements of mock data depending on feed', () => {
    const wrapper = shallowMount(MessagesList, {
      store,
      localVue
    })

    const messagesListLength = wrapper.findAll('.messages-list-item').length
    expect(messagesListLength).toBe(feed.length)
  })

  it('renders message-own when id of message is equal to authorId', () => {
    const wrapper = mount(MessagesList, {
      store,
      localVue
    })

    const ownMessageIndex = feed.findIndex(message => message.id === authorId)
    const ownMessageItem = wrapper
      .findAll('.messages-list-item')
      .at(ownMessageIndex)
      .find('.message--own')
    expect(ownMessageItem.exists()).toBe(true)
  })

  it('renders message-foreign when id of message is not equal to authorId', () => {
    const wrapper = mount(MessagesList, {
      store,
      localVue
    })

    const ownMessageIndex = feed.findIndex(message => message.id !== authorId)
    const ownMessageItem = wrapper
      .findAll('.messages-list-item')
      .at(ownMessageIndex)
      .find('.message--foreign')
    expect(ownMessageItem.exists()).toBe(true)
  })
})
