function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    if (hours < 10) {
        hours = '0' + hours;
    } else if (minutes < 10) {
        minutes = '0' + minutes;
    } else if (seconds < 10) {
     seconds =  '0' + seconds;
    }

    
    document.getElementById('hours').innerHTML = hours + ':'; 
    document.getElementById('minutes').innerHTML = minutes + ':';
    document.getElementById('seconds').innerHTML = seconds;

}
setInterval (clock, 1000);
