const url = 'https://api.github.com/users/atilaCSilva'

async function start() {
  const user = await fetch(url).then(r => r.json())
  const repos = await fetch(user.repos_url).then(r => r.json())
  console.log(repos)
}

start().catch(error => console.log(error.message))
