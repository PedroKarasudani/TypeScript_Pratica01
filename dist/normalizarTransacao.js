import moedaParaNumero from './moedaPraNumero.js';
export default function normalizarTransacao(transacao) {
    return {
        status: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        nome: transacao.Nome,
        pagamento: transacao['Forma de Pagamento'],
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        novo: Boolean(transacao['Cliente Novo']),
        valor: moedaParaNumero(transacao['Valor (R$)']),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map