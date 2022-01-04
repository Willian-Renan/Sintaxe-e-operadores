function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

let num1 = Number(prompt('Insira o primeiro valor:'));
let num2 = Number(prompt('Insira o segundo valor:'));

if (!num1 || !num2) {
	alert('Insira um número em cada variável');
	comparaNumeros();
} else {

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return alert(`${primeiraFrase} ${simNao} são iguais.`);
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor que';
	let comparaVinte = 'menor que';

	if (soma > 10) {
		comparaDez = 'maior que';
	}

	if (soma === 10) {
		comparaDez = 'igual a';
	}

	if (soma > 20) {
		comparaVinte = 'maior que';
	}

	if (soma === 20) {
		comparaVinte = 'igual a';
	}

	return alert(`Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`);
}
}
console.log(comparaNumeros(num1, num2));
