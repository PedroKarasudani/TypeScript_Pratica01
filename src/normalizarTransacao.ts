import moedaParaNumero from './moedaPraNumero.js';
import stringToDate from './stringToDate.js';

declare global {
  type TransacaoPagamento = 'Cartão de Crédito' | 'Boleto';
  type TransacaoStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada';

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
    data: Date;
    nome: string;
    pagamento: TransacaoPagamento;
    email: string;
    moeda: string;
    novo: boolean;
    valor: number | null;
  }
}

export default function normalizarTransacao(
  transacao: TransacaoAPI,
): Transacao {
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
