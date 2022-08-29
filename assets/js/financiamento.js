// Está importando a CLASS Parcela a partir de outro arquivo JS.
import { Parcela } from "../js/parcela.js";

// O EXPORT é usado para permitir a exportação de dados para outro arquivo.
export class Financiamento {
  // Lista de atributos privados que vão ser usados dentro do construtor.
  // Os atributos privados não podem ser acessados diretamente.  
  #taxaJuros; // Juros mensais.
  #prazo; // Prazo em meses.
  #parcelas = []; // Parcelas em vetor.

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(valor, entrada, taxaJuros, prazo) {
    //  O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.  
    this.#taxaJuros = taxaJuros;
    this.#prazo = prazo;
    // Está criando um objeto novo e armazenando os valores dos atributos no vetor parcelas.
    // O atributo saldo da CLASS Parcela está recebendo o atributo valor e subtraindo pela a entrada.
    this.#parcelas.push(new Parcela(0, 0, 0, 0, valor - entrada));
  }

  // Criado um método estático responsável por calcular os juros.
  static calcJuros(valor, taxaJuros) {
    // Está retornando taxaJuros dividido por 100 e depois multiplicado pelo valor.
    return valor * (taxaJuros / 100);
  }

  // Criado um método público responsável pelos cálculos das parcelas mensais.
  calcParcelasMensais() {
    // Está selecionando o atributo parcelas e definindo no seu vetor o número de parcelas -1. Em seguida retornando o valor do saldo.
    let saldo = this.#parcelas[this.#parcelas.length-1].getSaldo();
    // Ele irá pegar o valor do prazo e subtrair pelo número de parcelas, retirando -1 de parcela.
    let prazo = this.#prazo - (this.#parcelas.length-1);
    // Responsável por dividir o resultado do saldo com o do prazo.
    let amortizacao = saldo / prazo;

    for(let i = 0; i < prazo; i++) {
      // Está pegando o tamanho do vetor parcelas.
      let numero = this.#parcelas.length;
      // Está instanciando um método estático, que calcula os juros. Está atribuindo ao método estático o valor do saldo e taxaJuros.
      let juros = Financiamento.calcJuros(saldo,this.#taxaJuros);
      // O valor será o valor armazenado na variável juros mais o resultado do saldo dividido pelo prazo armazenado na amortização.
      let valor = juros + amortizacao;
      // Está decrementando(diminuindo um número), o resultado da armotizacao;
      saldo -= amortizacao;
      
      // Usado para evitar que o número do saldo fique negativado.
      if(saldo < 0) {
        // Está definindo o saldo com o saldo 0;
        saldo = 0;
      }
      this.#parcelas.push(new Parcela(numero, valor, juros, amortizacao, saldo));
    }
  }

  // Criado um método público responsável por exibir as parcelas mensais.
  exibeParcelas() {
    // Está selecionando o atributo privado parcelas e falando para ignorar o primeiro índice do vetor e começar pelo segundo.
    let parcelas = this.#parcelas.slice(1);

    // O FOR vai percorrer cada elemento do vetor parcelas e executar o bloco de comandos do FOR.
    for(let parcela of parcelas) {
      // Está inserindo uma linha vazia no corpo da tabela até a ultima linha, por isso -1.
      let linha = corpoTabela.insertRow(-1);

      // O FOR vai percorrer cada elemento de parcela e executar o método getDadosFormatados que é o método que tem todas as informações dos resultados.
      for(let dado of parcela.getDadosFormatados()) {
        // Está inserindo na linha uma célula no corpo da tabela até a ultima célula, por isso -1.
        let celula = linha.insertCell(-1);
        // Irá inserir nas células o vetor de dados presente dentro do método getDadosFormatados.
        celula.textContent = dado;
      }
    }
  }

  getParcelas() {
    // Está retornando o atributo privado parcelas para que ele possa ser chamado em outro lugar.
    return this.#parcelas;
  }
}