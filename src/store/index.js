import { createStore } from 'vuex'
import { feedbackStore } from './modules/feedback.store'

export const store = createStore({
  strict: true,
  modules: {
    feedbackStore
  },
})

