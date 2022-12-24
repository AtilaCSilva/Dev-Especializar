function imprimirDado(dado) {
  console.log(dado(123))
}

imprimirDado(function () {
  return 'Ola mundo!'
})
