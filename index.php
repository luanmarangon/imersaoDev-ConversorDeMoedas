<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imersão DEV - Conversor de Moedas</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="container">
    <h1 class="page-title">
        Conversor de moedas
    </h1>
    <p class="page-subtitle">
        Descubra os valores em dolar U$
    </p>
    <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-conversor-de-moedas.svg"
         class="page-logo" alt=""><br><br>
    <label for="moeda">Insira o valor</label><br>
    <input type="number" id="valor" size="2"/><br>
    <button type="submit" onclick="ConverterReal()">Converter em Real</button>
    <button type="submit" onclick="ConverterEuro()">Converter em Euro</button>
    <button type="submit" onclick="ConverterBitcoin()">Converter em Euro</button>
    <h2 id="valorConvertido"></h2>
</div>
<a href="https://alura.com.br/" target="_blank">
    <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">

    <script src="script.js" type="text/javascript"></script>
</body>
</html>