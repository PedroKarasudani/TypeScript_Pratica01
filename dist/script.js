import fetchDados from './fetchDados.js';
import normalizarTransacao from './normalizarTransacao.js';
async function handleDados() {
    const dados = await fetchDados('https://api.origamid.dev/json/transacoes.json?');
    if (!dados)
        return;
    const transacao = dados.map(normalizarTransacao);
    preencherTabela(transacao);
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