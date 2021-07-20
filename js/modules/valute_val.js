let setValueToValutes = async valuteNames => { // принимает в виде аргумента название валюты

    try {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const valutes = Object.assign({}, data.Valute);

        for (let valuteName of valuteNames) {
            let valuteDOMelement = document.querySelector(`.${valuteName.toLowerCase()}`); // получаем элемент DOM для этой валюты

            for (key in valutes) {
                if (valutes[key].CharCode === valuteName.toUpperCase()) { // проверяем на соответсвие имени необходимой валюты
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


//////\\\\\\
// запустить live server и прикрутить export 
//////\\\\\\