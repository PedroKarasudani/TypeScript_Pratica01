import fetchDados from './fetchDados.js';
import normalizarTransacao from './normalizarTransacao.js';
async function handleDados() {
    const dados = await fetchDados('https://api.origamid.dev/json/transacoes.json');
    if (!dados)
        return;
    const transacao = dados.map(normalizarTransacao);
    console.log(transacao);
}
handleDados();
//# sourceMappingURL=script.js.map