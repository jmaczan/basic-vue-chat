import { shallowMount, createLocalVue } from '@vue/test-utils'
import { MODULE, SET_FEED, PUSH_TO_FEED, SET_AUTHOR_ID, RESET_NEW_MESSAGE } from '@/store/actions/general.js'
import { storeHelpers } from '@/helpers/store.js'
import Vuex from 'vuex'
import BasicVueChat from '@/components/basic-vue-chat/BasicVueChat.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('BasicVueChat.vue', () => {
  let mutations
  let store
  let state

  beforeEach(() => {
    mutations = {
      [storeHelpers.concat(MODULE, SET_FEED)]: jest.fn(),
      [storeHelpers.concat(MODULE, PUSH_TO_FEED)]: jest.fn(),
      [storeHelpers.concat(MODULE, SET_AUTHOR_ID)]: jest.fn(),
      [storeHelpers.concat(MODULE, RESET_NEW_MESSAGE)]: jest.fn()
    }
    state = {
      authorId: 1,
      message: '',
      feed: []
    }
    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it('renders props.title when passed', () => {
    const title = 'Team Test'
    const wrapper = shallowMount(BasicVueChat, {
      store,
      localVue,
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
