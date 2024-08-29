export default class Estatistica {
    private transacao;
    total: number;
    pagamento: import("./countBy.js").CountList;
    status: import("./countBy.js").CountList;
    constructor(transacao: Transacao[]);
    private setTotal;
    private setPagamento;
    private setStatus;
}
