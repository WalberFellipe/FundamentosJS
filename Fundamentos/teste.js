let pedro = {
  nome: 'Pedro',
  dizerFrase: function () {
    console.log(`${this.nome} está correndo para pegar o trem!`)
  }
}

pedro.dizerFrase() // Pedro está correndo para pegar o trem!