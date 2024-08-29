import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatistica {
    transacao;
    total;
    pagamento;
    status;
    constructor(transacao) {
        this.transacao = transacao;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transacao.filter(filtrarValor).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
    setPagamento() {
        return countBy(this.transacao.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacao.map(({ status }) => status));
    }
}
//# sourceMappingURL=Estatisticas.js.map