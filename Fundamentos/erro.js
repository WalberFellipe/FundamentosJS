function tratarErroELancar(erro) {
    //throw new Error('Erro de usuario')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log ('final')
    }
}

const obj = {nome: 'Roberto'} // erro está em nome que foi passado como name
imprimirNomeGritado(obj)