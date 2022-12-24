const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.log(error))
}

function getUser() {
  fetch(`${url}/1`)
    .then(res => res.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(err => console.log(err))
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.log(error))
}

const newUser = {
  name: 'atila Silva',
  avatar: 'https://github.com/atilaCSilva.png',
  city: 'Betim'
}

function updateUser(updatingUser, id) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatingUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(err => console.log(err))
}

const updatingUser = {
  name: 'Maik Brito',
  avatar: 'https://github.com/maykbrito.png',
  city: 'Parana'
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.log(error))
}

getUsers()
addUser(newUser)
getUser()
updateUser(updatingUser, 4)
deleteUser()
