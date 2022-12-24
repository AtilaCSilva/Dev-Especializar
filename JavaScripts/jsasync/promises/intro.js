/*
- Promise 
- 
- A promessa de que algo irá acontecer 
- Poderá dar certo ou errado,
- mas irá acontecer
*/

let aceitar = false

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido confirmado')
  }
  return reject('pedido cancelado!')
})

console.log('aguardando')
promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizado'))
