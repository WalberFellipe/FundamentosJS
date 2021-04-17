function compras(trabalho1, trabalho2) {
    const comprarBMW = trabalho1 && trabalho2
    const comprarCelta = trabalho1 != trabalho2
    const comprarVinho = trabalho1 || trabalho2
    const economizar = !comprarVinho

    return { comprarBMW, comprarCelta, comprarVinho, economizar}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))