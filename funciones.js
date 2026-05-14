function jugar() {
    ponerBG();

    setTimeout(function () {
        window.location.assign('personajes.html');
    }, 2000);

    var sfxStar = new Audio('sfx/start.mp3');
    sfxStar.play();
}

function ponerBG() {
    document.querySelector('.bg-transicion').classList.add('bg-transicion-show');
}

function quitarBG() {
    const bg = document.querySelector('.bg-transicion');
    if (bg) {
        bg.style.backgroundColor = "rgba(0,0,0,0)";
        setTimeout(function () {
            bg.classList.remove('bg-transicion-show');
        }, 1000);
    }
}

let personajeActual = 1;

function siguientePersonaje() {
    personajeActual++;

    if (personajeActual > 6) {
        personajeActual = 1;
    }

    const img = document.getElementById('personaje');
    if (img) {
        img.src = "img/p" + personajeActual + ".png";
    }

    var sfxclic = new Audio('sfx/select.mp3');
    sfxclic.play();
}

function anteriorPersonaje() {
    personajeActual--;

    if (personajeActual < 1) {
        personajeActual = 6;
    }

    const img = document.getElementById('personaje');
    if (img) {
        img.src = "img/p" + personajeActual + ".png";
    }

    var sfxclic = new Audio('sfx/select.mp3');
    sfxclic.play();
}

function personaje2() {
    localStorage.setItem('personaje1', personajeActual = 1);
    localStorage.setItem('jugador1', document.getElementById('jugador1').value);

    ponerBG();

    setTimeout(() => {
        window.location.assign('personaje2.html');
    }, 2000);

    var sfxStar = new Audio('sfx/start.mp3');
    sfxStar.play();
}

function comenzarJuego() {
    localStorage.setItem('personaje2', personajeActual);
    localStorage.setItem('jugador2', document.getElementById('jugador2').value);

    ponerBG();

    setTimeout(() => {
        window.location.assign('juego.html');
    }, 2000);

    var sfxStar = new Audio('sfx/start.mp3');
    sfxStar.play();
}

function cargarEscenario() {
    if(!localStorage.getItem('marcador1')){
        localStorage.setItem('marcador1','0')
        localStorage.setItem('marcador2','0')
        marcador1 = localStorage.getItem('marcador1');
        marcador2 = localStorage.getItem('marcador2');
    }else{
        marcador1 = localStorage.getItem('marcador1');
        marcador2 = localStorage.getItem('marcador2');
    }

    //contador muertes
    for(i=0; i<marcador1; i++){
        document.querySelector('.vidas2').innerHTML+="<img src='img/calavera.png"
    }
    for(i=0; i<marcador2; i++){
        document.querySelector('.vidas1').innerHTML+="<img src='img/calavera.png"
    }
    if(marcador1 >= 3 || marcador2 >= 3){
        document.querySelector('.bg-juego').style.backgroundImage = "url(img/bg_personaje.png)";
        if(marcador1 >= 3){
            document.querySelector("#nombreGanador").innerHTML = localStorage.getItem('jugador1');
            document.querySelector("#imgGanador").setAttribute('src', 'img/p' + localStorage.getItem('personaje1') + '.png');
            document.querySelector('.left').style.display = "none";
            document.querySelector('.right').style.display = "none";
        }else if(marcador2 >= 3){
            document.querySelector("#nombreGanador").innerHTML = localStorage.getItem('jugador2');
            document.querySelector("#imgGanador").setAttribute('src', 'img/p' + localStorage.getItem('personaje2') + '.png');
            document.querySelector('.left').style.display = "none";
            document.querySelector('.right').style.display = "none";
        }
    }

    const bg = Math.floor(Math.random() * 3) + 1;
    const fondoJuego = document.querySelector('.bg-juego');

    if (fondoJuego) {
        fondoJuego.style.backgroundImage = `url('img/bg${bg}.png')`;
    }
    const nombre1 = localStorage.getItem('jugador1') || "Jugador 1";
    const nombre2 = localStorage.getItem('jugador2') || "Jugador 2";
    const personaje1 = localStorage.getItem('personaje1');
    const personaje2 = localStorage.getItem('personaje2');

    const j1 = document.getElementById('jugador1');
    const j2 = document.getElementById('jugador2');

    if (j1) j1.textContent = nombre1;
    if (j2) j2.textContent = nombre2;

    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');

    if (p1 && personaje1) {
        p1.innerHTML += `<img src="img/p${personaje1}.png">`;
    }

    if (p2 && personaje2) {
        p2.innerHTML += `<img src="img/p${personaje2}.png">`;
    }

    listos();
}


function disparo1() {
    console.log("Jugador 1 disparó");

    var sfx = new Audio('sfx/disparo.mp3');
    sfx.play();
}

function disparo2() {
    console.log("Jugador 2 disparó");

    var sfx = new Audio('sfx/disparo.mp3');
    sfx.play();
}

function iniciarSeleccion() {
    personajeActual = 1;

    const img = document.getElementById('personaje');
    if (img) {
        img.src = "img/p1.png";
    }
}

function listos(){
    setTimeout(function(){
        document.querySelector('.msj').style.opacity = "1";
    },500)
}

function conteo(){
    var sfxclic = new Audio('sfx/select.mp3');
    document.querySelector('.msj').style.opacity = "0";
    document.querySelector('.no3').style.opacity = "1";
    sfxclic.play();

    setTimeout(function(){
        document.querySelector('.no3').style.opacity = "0";
        document.querySelector('.no2').style.opacity = "1";
        sfxclic.play();

        setTimeout(function(){
        document.querySelector('.no2').style.opacity = "0";
        document.querySelector('.no1').style.opacity = "1";
        sfxclic.play();
        tiemporandom = Math.floor((Math.random()*10)+1);
        tiemporandom = tiemporandom + "000";

            setTimeout(function(){
            document.querySelector('.no1').style.opacity = "0";
            document.querySelector('.conteo').style.display = "none";
            sfxclic.play();
            }, tiemporandom)
        }, 1000)
    }, 1000);
}

function disparo1(){
    console.log('disparo1');
    document.querySelector('.right').setAttribute('onclick','')
    document.querySelector('.left').setAttribute('onclick','')
    document.querySelector('.p2').style.right = "-800px"
    document.querySelector('.p1').style.left = "10px"
    setTimeout(function(){
        document.querySelector('.p1').style.left = "30px"
    },150);
    marcador1++;
    localStorage.setItem('marcador1', marcador1);

setTimeout(() => {
        window.location.assign('juego.html');
    }, 2000);

    var sfxStar = new Audio('sfx/start.mp3');
    sfxStar.play();
}

function disparo2(){
    console.log('disparo1');
    document.querySelector('.left').setAttribute('onclick','')
    document.querySelector('.right').setAttribute('onclick','')
    document.querySelector('.p1').style.left = "-800px"
    document.querySelector('.p2').style.right = "10px"
    setTimeout(function(){
        document.querySelector('.p1').style.left = "30px"
    },150);
    marcador2++;
    localStorage.setItem('marcador2', marcador2);

setTimeout(() => {
        window.location.assign('juego.html');
    }, 2000);

    var sfxStar = new Audio('sfx/start.mp3');
    sfxStar.play();
}

function restart(){
    localStorage.setItem('marcador1', '0');
    localStorage.setItem('marcador2', '0');

    window.location.assign('personajes.html')
}