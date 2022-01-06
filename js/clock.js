let time;

function dataTime() {
    let data = new Date();

    let hour = document.getElementsByClassName('hh')[0];
    let min = document.getElementsByClassName('mm')[0];
    let sec = document.getElementsByClassName('ss')[0];

    hour.textContent = data.getHours() + ':';
    min.innerHTML = data.getMinutes() + ':';
    sec.innerHTML = data.getSeconds();

    time = setTimeout(dataTime, 1000);
}

function clockStart() {
    time = setTimeout(dataTime, 1000);
    time();
}

function clockStop() {
    clearTimeout(time);
}