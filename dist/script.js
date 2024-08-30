import Estatistica from './Estatisticas.js';
import fetchDados from './fetchDados.js';
import normalizarTransacao from './normalizarTransacao.js';
async function handleDados() {
    const dados = await fetchDados('https://api.origamid.dev/json/transacoes.json?');
    if (!dados)
        return;
    const transacao = dados.map(normalizarTransacao);
    preencherTabela(transacao);
    preencherEstatistica(transacao);
}
function preencherLista(containerId, lista) {
    const cotainerElement = document.getElementById(containerId);
    if (cotainerElement) {
        Object.keys(lista).forEach((key) => {
            cotainerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        });
    }
}
function preencherEstatistica(transacoes) {
    const data = new Estatistica(transacoes);
    preencherLista('pagamento', data.pagamento);
    preencherLista('status', data.status);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector('#transacoes tbody');
    if (!tabela)
        return;
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
//# sourceMappingURL=script.js.map