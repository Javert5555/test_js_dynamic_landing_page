let setValueToBTC = () => {

    let btcDOMelement = document.querySelector('.btc');
    let btcPrice = {}

    const request = fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR');

    request
    .then(
        response => response.json()
    )
    .then(
        data => {
            Object.assign(btcPrice, data); // клонируем объект с валютами
            btcDOMelement.innerText = `${Math.round(btcPrice.USD)} USD`;

            // console.log(valutes);
            // console.log(data)
        }
    )
    .catch(
        err => {
            // val = "Неизвестно";
            console.log(err)
        }
    );

};

setValueToBTC();


//////\\\\\\
// запустить live server и прикрутить export 
//////\\\\\\