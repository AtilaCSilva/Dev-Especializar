const url = 'http://localhost:5000/api'

function getUsers() {
  axios
    .get(url)
    .then(response => (apiResult.textContent = JSON.stringify(response.data)))
    .catch(err => console.log(err))
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
}
const newUser = {
  name: 'Mayk Brito',
  avatar: 'https://github.com/maykbrito.png',
  city: 'Paraná'
}

function getUser() {
  axios
    .get(`${url}/2`)
    .then(response => {
      const data = response.data
      userName.textContent = data.name
      avatarUrl.src = data.avatar
      userCity.textContent = data.city
    })
    .catch(err => console.log(err))
}

function changingUserDatas(infoChanged, id) {
  axios
    .put(`${url}/${id}`, infoChanged)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
}

const infoChanged = {
  name: 'Diego Fernandes',
  avatar: 'https://github.com/diego3g.png',
  city: 'Florianópolis'
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
}

getUser()
addNewUser(newUser)
getUsers()
changingUserDatas(infoChanged, 2)
deleteUser(3)
