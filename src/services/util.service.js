export const utilService = {
  delay,
  getRandomInt,
  makeId,
  getDemoItems,
  getEmptyItem,
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
  var txt = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getDemoItems() {
  return [
    {
      _id: makeId(),
      email: "alon@gmail.com",
      imgSrc: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
      comment: _getLorem(),
    },
    {
      _id: makeId(),
      email: "einat@gmail.com",
      imgSrc: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
      comment: _getLorem(),
    },
    {
      _id: makeId(),
      email: "saar@gmail.com",
      imgSrc: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
      comment: _getLorem(),
    },
  ]
}

function getEmptyItem() {
  return {
    imgSrc: "",
    icon: "",
    title: "",
    subtitle: "",
    body: ``,
  }
}

function _getLorem() {
  return "Lorem ipsum dolor sit amet? "
}
