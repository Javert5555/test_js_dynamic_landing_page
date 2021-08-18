let setValueToBTC = async () => {

    let btcDOMelement = document.querySelector('.btc');
    let btcPrice = {}
    try{
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR');
        const data = await response.json();
        Object.assign(btcPrice, data); // cloning object with currencies
        btcDOMelement.innerText = `${Math.round(btcPrice.USD)} USD`;        
    } catch(err) {
        btcDOMelement.innerText = "Неизвестно";
        console.log(err)
    }

};

setValueToBTC()