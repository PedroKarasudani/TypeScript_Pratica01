function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatistica {
    transacao;
    total;
    constructor(transacao) {
        this.transacao = transacao;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transacao.filter(filtrarValor).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
}
//# sourceMappingURL=Estatisticas.js.map