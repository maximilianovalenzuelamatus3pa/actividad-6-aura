const pesoInput = document.querySelector('#peso-input');
const alturaInput = document.querySelector('#altura-input');

function calcularIMC() {
	const peso = Number(pesoInput.value);
	const altura = Number(alturaInput.value);
	const imcElement = document.querySelector('#imc');
	const resultadoElement = document.querySelector('#resultado');

	if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
		imcElement.textContent = '--';
		resultadoElement.textContent = 'Ingresa un peso y una altura válidos.';
		return;
	}

	const imc = peso / (altura * altura);
	let resultado = '';

	if (imc < 18.5) {
		resultado = 'IMC bajo';
	} else if (imc < 25) {
		resultado = 'Tiene un IMC normal';
	} else if (imc < 30) {
		resultado = 'IMC alto (sobrepeso)';
	} else {
		resultado = 'IMC en rango de obesidad';
	}

	imcElement.textContent = imc.toFixed(2);
	resultadoElement.textContent = resultado;
}

pesoInput.addEventListener('input', calcularIMC);
alturaInput.addEventListener('input', calcularIMC);
calcularIMC();
