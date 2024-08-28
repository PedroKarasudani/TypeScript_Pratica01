import fetchDados from './fetchDados.js';
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

async function handleDados() {
  const dados = await fetchDados<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json',
  );
  if (dados) {
    dados.forEach((dado) => {
      console.log(dado['Forma de Pagamento']);
    });
  }
}

handleDados();
