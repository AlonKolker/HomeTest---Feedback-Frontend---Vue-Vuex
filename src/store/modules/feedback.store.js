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
            console.log('savedFeedback',savedFeedback._id)
            const idx = state.feedbacks.findIndex(feedback => feedback._id === savedFeedback._id)
            console.log('idx', idx)
            if (idx <= 0) state.feedbacks.unshift(savedFeedback)
            else state.feedbacks[idx] = savedFeedback
        },
        removeItem(state, { itemId }) {
            state.items = state.items.filter(item => item._id !== itemId)
        },
        setFilter(state,{text}){
            console.log(text);
            state.filter = text
        }
    },
    actions: {
        async loadFeedbacks({ commit }) {
            try {
                const feedbacks = await feedbackService.query()
                console.log(feedbacks)
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
                // console.log(savedFeedback);
                commit({ type: 'updateFeedback', savedFeedback })
            } catch (err) {
                console.log('itemStore: Error in saveItem')
                throw err
            }
        },

        setFilter({commit},{text}){
            console.log(text)
            commit({ type: 'setFilter', text })


        }

    }
}