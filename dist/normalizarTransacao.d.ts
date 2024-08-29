declare global {
    type TransacaoPagamento = 'Cartão de Crédito' | 'Boleto';
    type TransacaoStatus = 'Paga' | 'Recusada pela operadora de cartão' | 'Aguardando pagamento' | 'Estornada';
    interface TransacaoAPI {
        Status: TransacaoStatus;
        ID: number;
        Data: string;
        Nome: string;
        'Forma de Pagamento': TransacaoPagamento;
        Email: string;
        'Valor (R$)': string;
        'Cliente Novo': number;
    }
    interface Transacao {
        status: TransacaoStatus;
        id: number;
        data: string;
        nome: string;
        pagamento: TransacaoPagamento;
        email: string;
        moeda: string;
        novo: boolean;
        valor: number | null;
    }
}
export default function normalizarTransacao(transacao: TransacaoAPI): {
    status: string;
    id: number;
    data: string;
    nome: string;
    pagamento: TransacaoPagamento;
    email: string;
    moeda: string;
    novo: boolean;
    valor: number | null;
};
