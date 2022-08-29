// Está importando a CLASS Financiamento a partir de outro arquivo JS.
import { Financiamento } from "../js/financiamento.js";

// Está importando a CLASS Parcela a partir de outro arquivo JS.
import { Parcela } from "../js/parcela.js";

// Está sendo criada uma CLASS chamada Carencia que está sendo filho da CLASS Financiamento, assim trabalhado com herança.
// O EXPORT é usado para permitir a exportação de dados para outro arquivo.
export class Carencia extends Financiamento {
  // Lista de atributos privados que vão ser usados dentro do construtor.
  // Os atributos privados não podem ser acessados diretamente.  
  #carencia;
  #taxaJuros; // Juros mensais.
  #parcelas = []; // Parcelas em vetor.

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(valor, entrada, taxaJuros, prazo, carencia) {
    // O SUPER está puxando os atributos e seus valores da CLASS Financiamento(pai).
    super(valor, entrada, taxaJuros, prazo)
    //  O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.  
    this.#carencia = carencia;
    this.#taxaJuros = taxaJuros;
    // Está pegando da CLASS Financiamento(pai) o método getParcelas que retorna o vetor privado parcelas. Estão na mesma memoria sendo assim irá alterar o valor do pai, pois tem as mesmas referencias.
    this.#parcelas = super.getParcelas();
  }

  // Usado para calcular as parcelas que tem carencia.
  // Como já tem um método parecido criado ele irá rescrever a partir desse código.
  calcParcelasMensais() {
    // Está pegando o atributo de vetor e na posição 0 que é o primeiro elemento e depois obtém seu saldo através de uma função por conta do atributo ser privado.
    let saldo = this.#parcelas[0].getSaldo();

    // Enquanto a variável I for maior que a carencia(em meses) incremente 1 ao I e assim vai se repetindo até atingir a condição final.
    for(let i = 0; i < this.#carencia; i++) {
      // O número vai ser o tamanho do vetor de parcelas.
      let numero = this.#parcelas.length;
      // Em soma está incrementando o saldo devedor, pois com carencia a pessoa não paga as primeiras parcelas, assim aumentando o saldo devedor com juros. 
      // Em seguida está chamando o método estático calcJuros e atribuindo a ele o valor dos atributos saldo e da taxa de juros.
      saldo += Financiamento.calcJuros(saldo, this.#taxaJuros)
      // Está adicionando dentro do vetor parcelas uma nova parcela e atribuindo a ela o valor do número, carencia 0, amortização 0, juros 0 e o valor do saldo.
      this.#parcelas.push(new Parcela(numero, 0, 0, 0, saldo));
    }
    // Está chamando o método calcParcelasMensais da CLASS Financiamento(pai) para continuar o código.
    super.calcParcelasMensais();
  }
}