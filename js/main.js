const time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    userName = document.querySelector('.user-name'),
    userFocus = document.querySelector('.user-focus')
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
        greeting.textContent = 'Good night';
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

//get userName, userFocus

let getUserName = () => {
    if (localStorage.getItem('userName') === null) {
        userName.textContent = '[Enter userName]';
    } else {
        userName.textContent = localStorage.getItem('userName');
    }
}

let getUserFocus = () => {
    if (localStorage.getItem('userFocus') === null) {
        userFocus.textContent = '[Enter userFocus]';
    } else {
        userFocus.textContent = localStorage.getItem('userFocus');
    }
}

//set userName, userFocus

let setUserName = (e) => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.key === 13) {
            localStorage.setItem('userName', e.target.innerText);
            userName.blur();
        }
    } else {
        localStorage.setItem('userName', e.target.innerText);
    }
    
};

let setUserFocus = (e) => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.key === 13) {
            localStorage.setItem('userFocus', e.target.innerText);
            userFocus.blur();
        }
    } else {
        localStorage.setItem('userFocus', e.target.innerText);
    }
    
};

userName.addEventListener('keypress', setUserName);
userName.addEventListener('blur', setUserName);
userFocus.addEventListener('keypress', setUserFocus);
userFocus.addEventListener('blur', setUserFocus);

showTime();
setBackgroundGreet();
getUserName();
getUserFocus();


// time.addEventListener()
