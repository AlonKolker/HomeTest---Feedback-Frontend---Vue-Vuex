import { feedbackService } from '../../services/feedback.service'

export const feedbackStore = {
    state: {
        feedbacks: [],
        filter:'',
    },
    getters: {
        feedbacks({ feedbacks,filter }) {
          if(filter === '')  return feedbacks 
        return feedbacks.filter(feedback=> feedback.comment.toLowerCase().includes(filter))
        },
    },
    mutations: {
        setFeedbacks(state, { feedbacks }) {
            state.feedbacks = feedbacks
        },
        updateFeedback(state, { savedFeedback }) {
            const idx = state.feedbacks.findIndex(feedback => feedback._id === savedFeedback._id)
            if (idx <= 0) state.feedbacks.unshift(savedFeedback)
            else state.feedbacks[idx] = savedFeedback
        },
        removeItem(state, { itemId }) {
            state.items = state.items.filter(item => item._id !== itemId)
        },
        setFilter(state,{text}){
            state.filter = text
        }
    },
    actions: {
        async loadFeedbacks({ commit }) {
            try {
                const feedbacks = await feedbackService.query()
                commit({ type: 'setFeedbacks', feedbacks })
                  } catch (err) {
                console.log('itemStore: Error in loadItems', err)
                throw err
            }
        },
        async removeItem({ commit }, { itemId }) {
            try {
                await itemService.remove(itemId)
                commit({ type: 'removeItem', itemId })
            } catch (err) {
                console.log('itemStore: Error in removeItem', err)
                throw err
            }
        },
        async saveMsg({ commit }, { feedback }) {
            try {
                const savedFeedback = await feedbackService.save(feedback)
                commit({ type: 'updateFeedback', savedFeedback })
            } catch (err) {
                console.log('itemStore: Error in saveItem')
                throw err
            }
        },

        setFilter({commit},{text}){
            commit({ type: 'setFilter', text })


        }

    }
}