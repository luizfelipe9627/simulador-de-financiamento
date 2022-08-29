// Está importando a CLASS Financiamento a partir de outro arquivo JS.
import { Financiamento } from "../js/financiamento.js";

// Está importando a CLASS FinanciamentoCarencia a partir de outro arquivo JS.
import { Carencia } from "../js/carencia.js";

// Está puxando elementos definidos no HTML para trabalharmos com ele no JavaScript.
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');
const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const botaoCalcular = document.querySelector('#botaoCalcular');
const botaoResetar = document.querySelector('#botaoResetar');
const avisoValor = document.querySelector('#avisoValor');
const avisoEntrada = document.querySelector('#avisoEntrada');
const avisoTaxaJuros = document.querySelector('#avisoTaxaJuros');
const avisoPrazo = document.querySelector('#avisoPrazo');
const containerDica = document.querySelector('#containerDica');
const dica = document.querySelector('#dica');
const ilustracaoImg = document.querySelector('#ilustracaoImg');
const tabela = document.querySelector('table');
const containerImagem = document.querySelector('#containerImagem');
const corpoTabela = document.querySelector('#corpoTabela');

// Função responsável por limpar a tabela quando for clicado no botão calcular mais de uma vez.
function limparTabela() {
  // Enquanto o corpoTabela tiver filho(as linhas) ele vai executar o bloco de comandos.
  while(corpoTabela.firstChild) {
    // Está removendo o primeiro filho(linha) do corpoTabela.
    corpoTabela.removeChild(corpoTabela.firstChild);
  }
}

// Está monitorando um evento de clique no botaoCalcular.
botaoCalcular.addEventListener('click', (e) => {
  // Responsável de fazer o botão submit não enviar o formulário.
  e.preventDefault();

  // Está verificando se os inputs estão vazios, se algum estiver vai exibir um aviso nele e depois de 3 segundos irá sumir.
  if(textoValor.value === '' ) {
    // Está adicionando um texto dentro do elemento.
    avisoValor.textContent = 'Este campo é obrigatório.';
    // Está adicionando uma nova classe no elemento.
    avisoValor.classList.add('aviso');
    // Usado para fazer focar o input apos exibir o aviso.
    textoValor.focus();

    // Responsável por fazer o aviso sumir.
    setTimeout(() => {
      // Está adicionando um texto vazio dentro do elemento.
      avisoValor.textContent = '';
      // Está removendo uma classe do elemento.
      avisoValor.classList.remove('aviso');
  }, 3000)} else {
    // Usado para fazer focar o input apos exibir o aviso.
    textoEntrada.focus();
  } 
  
  if(textoEntrada.value === '') {
    // Está adicionando um texto dentro do elemento.
    avisoEntrada.textContent = 'Este campo é obrigatório.';
    // Está adicionando uma nova classe no elemento.
    avisoEntrada.classList.add('aviso');

    // Responsável por fazer o aviso sumir.
    setTimeout(() => {
    // Está adicionando um texto vazio dentro do elemento.
      avisoEntrada.textContent = '';
      // Está removendo uma classe do elemento.
      avisoEntrada.classList.remove('aviso');
  }, 3000)} else {
    // Usado para fazer focar o input apos exibir o aviso.
    textoTaxaJuros.focus();
  } 
    
  if(textoTaxaJuros.value === '') {
    // Está adicionando um texto dentro do elemento.
    avisoTaxaJuros.textContent = 'Este campo é obrigatório.';
    // Está adicionando uma nova classe no elemento.
    avisoTaxaJuros.classList.add('aviso');

    // Responsável por fazer o aviso sumir.
    setTimeout(() => {
      // Está adicionando um texto vazio dentro do elemento.
      avisoTaxaJuros.textContent = '';
      // Está removendo uma classe do elemento.
      avisoTaxaJuros.classList.remove('aviso');
  }, 3000)} else {
    // Usado para fazer focar o input apos exibir o aviso.
    textoPrazo.focus();
  } 
  
  if(textoPrazo.value === '' ) {
    // Está adicionando um texto dentro do elemento.
    avisoPrazo.textContent = 'Este campo é obrigatório.';
    // Está adicionando uma nova classe no elemento.
    avisoPrazo.classList.add('aviso');

    setTimeout(() => {
      // Está adicionando um texto vazio dentro do elemento.
      avisoPrazo.textContent = '';
      // Está removendo uma classe do elemento..
      avisoPrazo.classList.remove('aviso');
  }, 3000)} else {
    // Caso esteja tudo preenchido ele vai focar no botão calcular.
    botaoCalcular.focus();
  }

  // Está verificando se todos os inputs já foram preenchidos.
  if(textoValor.value === '' || textoEntrada.value === '' || textoTaxaJuros.value ==='' || textoPrazo.value === '') {
    // Se não forem preenchidos vi voltar para o inicio do bloco.
    return e;
  } else {
    // Irá fazer a ilustração sumir.
    ilustracaoImg.style.display = 'none';
    // Irá mudar o width do containerImagem para 100% para que a tabela possa ocupar todo o espaço necessário.
    containerImagem.style.width = '100%'
    // Alterando a altura para que não se expanda mais do que a tela.
    containerImagem.style.height = '31.375rem';
    // Irá colocar o scroll no containerImagem.
    containerImagem.style.overflow = 'scroll';
    // Irá fazer a tabela aparecer na tela ao invés da ilustração.
    tabela.style.display = 'table';
    // Irá tirar o container de atenção da tela.
    containerDica.style.display = 'none';
  }

  // Está invocando a função responsável por limpar a tabela de valores.
  limparTabela()

  // Está pegando o valor dos atributos privados e transformando de string para números decimais.
  let valor = parseFloat(textoValor.value);
  let entrada = parseFloat(textoEntrada.value);
  let taxaJuros = parseFloat(textoTaxaJuros.value);
  let prazo = parseFloat(textoPrazo.value);

  // Criada uma variável vazia chamada simulacao.
  let simulacao;

  if(comCarencia.checked) {
    // Está convertendo o valor da listaSuspensa de string para número inteiro.
    let carencia = parseInt(listaSuspensa.value);
    // Está instanciando os objetos da CLASS Carencia.
    simulacao = new Carencia(valor, entrada, taxaJuros, prazo, carencia);
  } else {
    // Está instanciando os objetos da CLASS Financiamento.
    simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
  }

  // Está chamando o método calcParcelasMensais assim fazendo o método ser executado e retornado.
  simulacao.calcParcelasMensais();
  // Está chamando o método exibeParcelas assim fazendo o método ser executado e retornado.
  simulacao.exibeParcelas();
});

// Está monitorando um evento de clique no botaoLimpar.
botaoResetar.addEventListener('click', () => {
  // Está fazendo a listaSuspensa sumir caso esteja na tela.
  listaSuspensa.style.display = 'none';
  // Está fazendo a tabela sumir da tela.
  tabela.style.display = 'none';
  // Irá mudar o width do containerImagem para o valor que ja estava.
  containerImagem.style.width = '30rem';
  // Irá mudar o height do containerImagem para ele se adaptar.
  containerImagem.style.height = 'auto';
  // Está fazendo a imagem aparecer.
  ilustracaoImg.style.display = 'flex';
  // Volta para o border-radius padrão definido no CSS.
  containerImagem.style.borderRadius = '0 1.875rem 1.875rem 0rem';
  // Irá tirar o scroll horizontal do containerImagem.
  containerImagem.style.overflowX = 'hidden';
  // Vai fazer o container de atenção voltar a aparecer na tela.
  containerDica.style.display = 'flex';
});

// Está monitorando um evento de mudança no comCarencia.
comCarencia.addEventListener('change', () => {
  // Irá fazer a listaSuspensa aparecer quando marcar o checkbox e desaparecer quando desmarcar.
  if(listaSuspensa.style.display === 'flex') {
    // Irá fazer a listaSuspensa sumir.
    listaSuspensa.style.display = 'none';
  } else {
    // Irá fazer a listaSuspensa aparecer.
    listaSuspensa.style.display = 'flex';
  }
});

// Criado uma estrutura de repetição, que vai repetir o bloco de comandos 100 vezes.
for(let i = 0; i < 100; i++) {
  // O setInterval executa o seu bloco depois de 7 segundos.
  setInterval(() => {
    // Irá mudar o texto da dica.
    dica.textContent = 'Para ter exito no calculo do resultado utilize valores decimais sem qualquer tipo de caractere.';
  }, 7000);

  // O setInterval executa o seu bloco depois de 14 segundos.
  setInterval(() => {
    // Irá mudar o texto da dica.
    dica.textContent = 'Caso estiver pelo celular ative o modo para computador para melhor leitura da tabela de valores.';
  }, 14000);
}