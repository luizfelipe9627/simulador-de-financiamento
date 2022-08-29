// O EXPORT é usado para permitir a exportação de dados para outro arquivo.
// CLASS responsável pela conversão de valores das parcelas.
export class Parcela {
  // Lista de atributos privados que vão ser usados dentro do construtor.
  // Os atributos privados não podem ser acessados diretamente.  
  #numero;
  #valor;
  #juros;
  #amortizacao;
  #saldo;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(numero, valor, juros, amortizacao, saldo) {
    //  O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.  
    this.#numero = numero;
    this.#valor = valor;
    this.#juros = juros;
    this.#amortizacao = amortizacao;
    this.#saldo = saldo;
  }

  // Criado um método público que é responsável por retornar o valor presente no atributo privado saldo.
  getSaldo() {
    // Está retornando o atributo privado saldo para que seja possível utilizar ele em outro lugar.
    return this.#saldo;
  }

  // Criado um método público responsável por armazenar as informações dos resultados.
  getDadosFormatados() {
    // Está criando um vetor vazio.
    let dados = [];
    // Está colocando no vetor o número de parcelas.
    dados.push(this.#numero);
    // Está colocando no vetor o valor dos atributos. A toLocaleString está sendo usada para converter para o valor brasileiro e no estilo de moeda para real.
    dados.push(this.#valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    dados.push(this.#amortizacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    dados.push(this.#juros.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    dados.push(this.#saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

    // Irá finalizar o bloco de comandos e retornar para o vetor dados.
    return dados;
  }
}