let setValueToValutes = (valuteNames) => { // принимает в виде аргумента название валюты

    const request = fetch('https://www.cbr-xml-daily.ru/daily_json.js');

    request
    .then(
        response => response.json()
    )
    .then(
        data => {
            for (let valuteName of valuteNames) {
                let valuteDOMelement = document.querySelector(`.${valuteName.toLowerCase()}`); // получаем элемент DOM для этой валюты
                let valutes = {};
                
                Object.assign(valutes, data.Valute); // клонируем объект с валютами
                for (key in valutes) {
                    if (valutes[key].CharCode === valuteName.toUpperCase()) { // проверяем на соответсвие имени необходимой валюты
                        valuteDOMelement.innerText = `${valutes.USD.Value.toFixed(2)} RUB`;
                    }
                }
            }
        }
    )
    .catch(
        err => {
            valuteDOMelement.innerText = "Неизвестно";
            console.log(err)
        }
    );

};

setValueToValutes(['USD', 'EUR']);
// setValue('USD');


//////\\\\\\
// запустить live server и прикрутить export 
//////\\\\\\