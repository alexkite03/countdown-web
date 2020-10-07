 function pintarTexto(){
    for (x = 0; x < 13; x++) {
        esperar(x);
    }
 }

function esperar(x) {
    setTimeout(function () {
        var str = "I HATE 2020";
        var res = str.slice(0, x);
        document.getElementById("texto").innerHTML = res;
        if(x==12){
            empezarTexto();
        }
    }, 250 * x);
}

function empezarTexto(){
    for (x = 1; x < 13; x++) {
        esperar(x);
    }
}

const days = document.getElementById("dias");
const hours = document.getElementById("horas");
const mins = document.getElementById("minutos");
const seconds = document.getElementById("segundos");

const newYear = "1 Jan 2021";

function contador() {
    
    const newYearDate = new Date(newYear);
    const fecha = new Date();

    const totalsegundos = (newYearDate - fecha) / 1000;

    const dias = Math.floor(totalsegundos / 3600 / 24);
    const horas = Math.floor(totalsegundos / 3600) % 24;
    const minutos = Math.floor(totalsegundos / 60) % 60;
    const segundos = Math.floor(totalsegundos % 60);

    days.innerHTML = dias;
    hours.innerHTML = formatTime(horas);
    mins.innerHTML = formatTime(minutos);
    seconds.innerHTML = formatTime(segundos);
   
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
contador();
setInterval(contador, 1000);
pintarTexto();