const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//Sequência para acessar o nome do primeiro ator dentro da array elenco
//O nome do primeiro ator está Dentro do índice 0 da array elenco
const nomeAtor1 = filme.elenco[0]
console.log(nomeAtor1)
console.log(filme.elenco[0])


//Sequência para acessar o nome da última atriz dentro da array elenco
const nomeAtriz4 = filme.elenco[3]
console.log(nomeAtriz4)
console.log(filme.elenco[3])


//Sequência para exibir todas as transmissões de hoje
const todasTransmissoesHoje = filme.transmissoesHoje
console.log(todasTransmissoesHoje)
console.log(filme.transmissoesHoje)


//Sequência para exibir o horário da transmissão no canal Brasil
//O horário do canal Brasil está na segunda função dentro da array 
//transmissoesHoje.
const horarioCanalBrasil = filme.transmissoesHoje[1].horario
console.log(horarioCanalBrasil)
console.log(filme.transmissoesHoje[1].horario)

//Cada questão com 2 opções de resposta