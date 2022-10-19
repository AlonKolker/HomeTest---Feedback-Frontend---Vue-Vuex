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
    return temp

  }catch (err){
    throw err
  }
  // return storageService.query('feedback')
}

async function getById(itemId) {
  return storageService.get('item', itemId) 
}

function save(feedback) {

  return httpService.post('feedbacks', feedback) 
}

function remove(feedbackId) {
  // return httpService.delete(`item/${itemId}`)
  return storageService.remove('feedback', feedbackId)
}

function _createItems() {
  let feedbacks = JSON.parse(localStorage.getItem('feedback'))
  if (!feedbacks) { feedbacks = utilService.getDemoItems() }
  localStorage.setItem('feedback', JSON.stringify(feedbacks))
}


