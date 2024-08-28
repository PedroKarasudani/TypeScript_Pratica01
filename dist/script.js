import fetchDados from './fetchDados.js';
async function handleDados() {
    const dados = await fetchDados('https://api.origamid.dev/json/transacoes.json');
    if (dados) {
        dados.forEach((dado) => {
            console.log(dado['Forma de Pagamento']);
        });
    }
}
handleDados();
//# sourceMappingURL=script.js.map