const time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus')
    container = document.querySelector('.container');

// Show time

let showTime = () => {
    let today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    time.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    setTimeout(showTime, 1000);
};

// Add zero

let addZero = number => (parseInt(number, 10) < 10 ?  '0' : '') + number;

// Set background

let setBackgroundGreet = () => {
    let today = new Date,
        hours = today.getHours();

    if (hours < 6 || (hours > 22 && hours < 24)) {
        //night
        document.body.style.backgroundImage = "url('./images/night.jpg')";
        greeting.textContent = 'Good evening';
        document.body.style.color = '#fff';
        
    } else if (hours < 12) {
        //morning
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
        greeting.textContent = 'Good morning';
        container.style.color = '#fff';
        
    } else if (hours <= 18) {
        // afternoon
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        greeting.textContent = 'Good afternoon';
        
    } else {
        //evening
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
        document.body.style.backgroundPosition = 'center, bottom';
        greeting.textContent = 'Good evening';
        document.body.style.color = '#fff';
    }

}

showTime();
setBackgroundGreet();

// time.addEventListener()
