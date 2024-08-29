import countBy from "./countBy.js";

type TransacaoComValor = Transacao & { valor: number };
function filtrarValor(transacao: Transacao): transacao is TransacaoComValor {
  return transacao.valor !== null;
}

export default class Estatistica {
  private transacao;
  total;
  pagamento;
  status;
  constructor(transacao: Transacao[]) {
    this.transacao = transacao;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  private setTotal() {
    return this.transacao.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setPagamento() { 
    return countBy(this.transacao.map(({pagamento}) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacao.map(({status}) => status)); 
  }
}
