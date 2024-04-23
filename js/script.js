function carregarMoedas() {
    const requisicaoHttp = new XMLHttpRequest();
    requisicaoHttp.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL", false);
    requisicaoHttp.send();
    
    const resposta = JSON.parse(requisicaoHttp.responseText);
 
    let moedas = [
        {
            moeda: resposta.USDBRL.bid, 
            nome: resposta.USDBRL.name,
        },
        {
            moeda: resposta.BTCUSD.bid, 
            nome: resposta.BTCUSD.name,
        },
        {
            moeda: resposta.BTCBRL.bid, 
            nome: resposta.BTCBRL.name,
        }
    ];

    adicionarMoedas(moedas);
}

function adicionarMoedas(moedas) {
    const elementoDiv = document.getElementById("conteudo-moedas");

    moedas.forEach(function(moeda) {
        const elementoDivMoeda = document.createElement("div");
        elementoDivMoeda.classList.add("cartao");

        const elementoTexto = document.createElement("h1");
        elementoTexto.innerHTML = moeda.nome + ": " + moeda.moeda;

        elementoDivMoeda.appendChild(elementoTexto);
        elementoDiv.appendChild(elementoDivMoeda);
    });
}

carregarMoedas();
