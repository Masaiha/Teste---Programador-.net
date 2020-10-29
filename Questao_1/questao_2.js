
/*

Crie um algoritmo que dado um valor monetário X, encontre o menor número de cédulas em que esse valor 
pode ser representado. X sempre será um valor inteiro. As cédulas possíveis são 50, 20, 10, 5, 2 e 1.


Resposta para valorMonetario = 101 é 3
*/

var valorMonetario = 101
var notas = [1,2,5,10,20,50]
var total = 0;

notas.sort((a,b) => { return b-a })
	 .forEach(nota => {
		calcula(valorMonetario, nota) 

	 if(!valorMonetario) console.log("total: ", total)
})

function calcula(valor, nota){
	if(valor >= nota){
		valorMonetario = valor - nota
		total++
		calcula(valorMonetario, nota)
	} 
}





