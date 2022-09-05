const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

// copia por igual
//const copiaIdenticaPokemon1 = {...pokemon1}
//console.log(copiaIdenticaPokemon1)

// a) copia alterando pontos específicos solicitados
const pokemon2 = {...pokemon1, 
    nome: "Squirtle",
    tipo: "Água",
}

console.log(pokemon1)
console.log(pokemon2)

// b) No objeto original, adicione um array vazio chamado ataques
// Insira um objeto dentro deste array usando push
pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "normal",
    precisão: 100
})

console.log(pokemon1)

//c) Na cópia do objeto adicione ataques que se encontra no objeto original
pokemon2.ataques = [...pokemon1.ataques]

//d) Adicione no objeto original o ataque "Folha navalha"
pokemon1.ataques.push({
    nome:"Folha de Navalha", 
    dano:45, tipo:"Grama",
    precisao:100
})

//e) Adicione a cópia o ataque "Jato de água"
pokemon2.ataques.push({nome:"Jato de água", 
    dano:40, 
    tipo:"Água", 
    precisão: 100
})

//f) Imprima os dois objetos no console
console.log(pokemon1, pokemon2)


