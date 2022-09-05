/*Array chamado sacolão com três objetos*/
const sacolao = []

//Três objetos representando frutas
const uva = {
    nome: "uva", 
    preco: "R$" + 8.90 + "kg", 
    disponibilidade: false
}
const banana = {
    nome: "banana", 
    preco: "R$" + 2 + "kg", 
    disponibilidade: true
}
const laranja = {
    nome: "laranja", 
    preco: "RS" + 4.17 + "kg", 
    disponibilidade: true
}

//Adição dos objetos para o array sacolao usando o método push
sacolao.push(uva,banana,laranja)

//Impressão do array sacolao agora com os 3 objetos adicionados
console.log(sacolao)




