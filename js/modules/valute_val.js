let setValueToValutes = async valuteNames => { // receive the name of the currency as an argument

    try {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const valutes = Object.assign({}, data.Valute);

        for (let valuteName of valuteNames) {
            let valuteDOMelement = document.querySelector(`.${valuteName.toLowerCase()}`); // getting the DOM element for this currency

            for (key in valutes) {
                if (valutes[key].CharCode === valuteName.toUpperCase()) { // we check for compliance with the name of the required currency
                    valuteDOMelement.innerText = `${valutes[key].Value.toFixed(2)} RUB`;
                }
            }
        }
    } catch (err) {
        err => {
            valuteDOMelement.innerText = "Неизвестно";
            console.log(err);
        }
    }

};

setValueToValutes(['USD', 'EUR']);