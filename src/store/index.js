import { createStore } from 'vuex'
// import { userStore } from './modules/user.store'
import { feedbackStore } from './modules/feedback.store'

export const store = createStore({
  strict: true,
  modules: {
    // userStore,
    feedbackStore
  },
})

