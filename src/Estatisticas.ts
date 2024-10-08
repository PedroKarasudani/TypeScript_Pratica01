import countBy from './countBy.js';

type TransacaoComValor = Transacao & { valor: number };
function filtrarValor(transacao: Transacao): transacao is TransacaoComValor {
  return transacao.valor !== null;
}

export default class Estatistica {
  private transacao;
  total;
  pagamento;
  status;
  semana;
  melhorDia;
  constructor(transacao: Transacao[]) {
    this.transacao = transacao;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }

  private setTotal() {
    return this.transacao.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setPagamento() {
    return countBy(this.transacao.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacao.map(({ status }) => status));
  }

  private setSemana() {
    const semana = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sábado']: 0,
    };
    for (let i = 0; i < this.transacao.length; i++) {
      const day = this.transacao[i].data.getDay();
      if (day === 0) semana['Domingo'] += 1;
      if (day === 1) semana['Segunda'] += 1;
      if (day === 2) semana['Terça'] += 1;
      if (day === 3) semana['Quarta'] += 1;
      if (day === 4) semana['Quinta'] += 1;
      if (day === 5) semana['Sexta'] += 1;
      if (day === 6) semana['Sábado'] += 1;
    }
    return semana;
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
