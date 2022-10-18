import { httpService } from './http.service'
import { utilService } from './util.service'
import { storageService } from './async-storage.service'
// import { userService } from './user.service'
// import { socketService, SOCKET_EVENT_ITEM_ADDED } from './socket.service'

export const feedbackService = {
  query,
  save,
  remove,
  getById
}

// _createItems()

async function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  try{
    let temp = await httpService.get('feedbacks')
    console.log(temp)
    return temp

  }catch (err){
    throw err
  }
  // return storageService.query('feedback')
}

async function getById(itemId) {
  // return httpService.get(`item/${itemId}`)
  return storageService.get('item', itemId) 
}

function save(feedback) {
  console.log(feedback);
  // if (feedback._id) return storageService.put('feedback', feedback)
  // else return storageService.post('feedback', feedback)

  // if (item._id) return httpService.put(`item/${item._id}`, item)
  // else return httpService.post('item', item) 
  return httpService.post('feedbacks', feedback) 
}

function remove(feedbackId) {
  // return httpService.delete(`item/${itemId}`)
  return storageService.remove('feedback', feedbackId)
}

function _createItems() {
  let feedbacks = JSON.parse(localStorage.getItem('feedback'))
  console.log(feedbacks);
  if (!feedbacks) { feedbacks = utilService.getDemoItems() }
  localStorage.setItem('feedback', JSON.stringify(feedbacks))
}


