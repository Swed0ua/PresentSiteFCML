let clock = document.getElementById('clock');


function clockTime() {
    let time = new Date,
    h = time.getHours().toString(),
    m = time.getMinutes().toString(),
    s = time.getSeconds().toString();

    if(h.length < 2){h = '0' + h;}
    if(m.length < 2){m = '0' + m;}
    if(s.length < 2){s = '0' + s;}

    let clockString = h + ":" + m + ':' + s;
    clock.textContent = clockString;
}

setInterval(clockTime, 1000);
setTimeout (openCard(0), 0);

function openCard(id) {
    let openGameCardALL = document.getElementsByClassName('openGameCard');
    
    for(let i = 0; i<openGameCardALL.length; i++){
        openGameCardALL[i].classList.remove('openGameCard__this');
    }

    openGameCardALL[id].classList.add('openGameCard__this');
}