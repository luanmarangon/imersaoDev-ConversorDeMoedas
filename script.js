function ConverterReal() {
    //forma de criar desmembrado os elementos;
    // var valorEl = document.getElementById("valor");
    // var valor = valorEl.value;
    // var valorDolar = parseFloat(valor);

    //forma de criar em uma unica linha;
    var valorEl = parseFloat(document.getElementById("valor").value);
    var dolar = 5.16;
    var valorConvertido = valorEl * dolar;

    var elementConvertido = document.getElementById("valorConvertido");
    var conversao = "A conversão em Real é R$ " + valorConvertido.toFixed(2);
    elementConvertido.innerHTML = conversao;
}


function ConverterEuro() {
    var valorEl = parseFloat(document.getElementById("valor").value);
    var dolar = 1.10;
    var valorConvertido = valorEl * dolar;

    var elementConvertido = document.getElementById("valorConvertido");
    var conversao = "A conversão em Euro é € " + valorConvertido.toFixed(2);
    elementConvertido.innerHTML = conversao;
}

function ConverterBitcoin(){
    var valorEl = parseFloat(document.getElementById("valor").value);
    var dolar = parseFloat("39.291,50");
    var valorConvertido = valorEl * dolar;

    var elementConvertido = document.getElementById("valorConvertido");
    var conversao = "A conversão em Bitcoin é ฿ " + valorConvertido.toFixed(2);
    elementConvertido.innerHTML = conversao;
}