import { SET_FEED, PUSH_TO_FEED, SET_AUTHOR_ID, SET_NEW_MESSAGE, RESET_NEW_MESSAGE } from '../../actions/general'

export default {
  [SET_FEED]: (state, feed) => {
    state.feed = feed
  },
  [PUSH_TO_FEED]: (state, message) => {
    state.feed.push(message)
  },
  [SET_AUTHOR_ID]: (state, authorId) => {
    state.authorId = authorId
  },
  [SET_NEW_MESSAGE]: (state, message) => {
    state.message = message
  },
  [RESET_NEW_MESSAGE]: (state) => {
    state.message = ''
  }
}
