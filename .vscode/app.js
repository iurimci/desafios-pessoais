let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

const consoleButton = document.querySelector('.button');

consoleButton.addEventListener('click', () => {
  if (consoleButton.textContent.trim() === 'Console') {
    console.log('Você clicou no botão Console!');
  }
});
function exibirAlerta() {
  alert('Eu amo programar demais')
};
function perguntaNome() {
  let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito')
  alert(`Estive em ${nomeDaCidade} e lembrei de você`)
};
function somaDeNumeros() {
  let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
  let segundoNumero = parseInt(prompt('Digite o segundo número'));
  let resultado = primeiroNumero + segundoNumero ;
  alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}
