import moedaParaNumero from './moedaPraNumero.js';
import stringToDate from './stringToDate.js';
export default function normalizarTransacao(transacao) {
    return {
        status: transacao.Status,
        id: transacao.ID,
        data: stringToDate(transacao.Data),
        nome: transacao.Nome,
        pagamento: transacao['Forma de Pagamento'],
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        novo: Boolean(transacao['Cliente Novo']),
        valor: moedaParaNumero(transacao['Valor (R$)']),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map