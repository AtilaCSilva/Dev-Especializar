import axios from 'axios'

async function beggin() {
  try {
    const user = await axios.get('https://api.github.com/users/atilaCSilva')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos)
  } catch (error) {
    console.log(error)
  }
}

beggin()
