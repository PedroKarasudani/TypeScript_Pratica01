import { CountList } from './countBy.js';
import Estatistica from './Estatisticas.js';
import fetchDados from './fetchDados.js';
import normalizarTransacao from './normalizarTransacao.js';

async function handleDados() {
  const dados = await fetchDados<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?',
  );
  if (!dados) return;
  const transacao = dados.map(normalizarTransacao);
  preencherTabela(transacao);
  preencherEstatistica(transacao);
}

function preencherLista(containerId: string, lista: CountList): void {
  const cotainerElement = document.getElementById(containerId);
  if (cotainerElement) {
    Object.keys(lista).forEach((key) => {
      cotainerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
    });
  }
}

function preencherEstatistica(transacoes: Transacao[]): void {
  const data = new Estatistica(transacoes);

  preencherLista('pagamento', data.pagamento);
  preencherLista('status', data.status);

  const totalElement = document.querySelector<HTMLElement>('#total span');
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const diaElement = document.querySelector<HTMLElement>('#dia span');
  if (diaElement) {
    diaElement.innerText = data.melhorDia[0];
  }
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector('#transacoes tbody');
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
     <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
     </tr>
    `;
  });
}

handleDados();
