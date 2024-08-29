type TransacaoComValor = Transacao & { valor: number };
function filtrarValor(transacao: Transacao): transacao is TransacaoComValor {
  return transacao.valor !== null;
}

export default class Estatistica {
  private transacao;
  total;
  constructor(transacao: Transacao[]) {
    this.transacao = transacao;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transacao.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
}
