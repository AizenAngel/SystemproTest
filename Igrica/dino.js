window.onload = pocetna;
document.addEventListener("keydown", pomeranje);
setInterval(skakutanje, 30);

var screenW = 0;
var moze_skok = false;
var igracX = 50;
var igracY = 50;
var brzinaX = 0;
var brzinaY = 0;
var igracH = 50;
var zemljaX = 0;
var zemljaY = 400;


function skakutanje()
{
    document.getElementById("igrac").style.top = igracY + "px";
    document.getElementById("igrac").style.left = igracX + "px";
    igracY = igracY + brzinaY;
    brzinaY = brzinaY + 1;

    if(igracY > (zemljaY - igracH))
    {
        igracY = zemljaY - igracH;
        brzinaY = 0;
        moze_skok = true;
    }

    igracX = igracX + brzinaX;

    if(brzinaX > 0)
        brzinaX -= 1;
    
    if(brzinaX < 0)
        brzinaX += 1;
}


function pocetna(){
    screenW = screen.width;
    document.getElementById("zemlja").style.width = screenW + "px";
}

function pomeranje(e){
    if((e.keyCode == 87 || e.keyCode == 119) && moze_skok)
    {
        brzinaY = -15;
        igracY = igracY -15;
        moze_skok = false;
    }

    if(e.keyCode == 65 || e.keyCode == 97)
    {
        brzinaX -= 10;
    }

    if(e.keyCode == 68 || e.keyCode == 100)
    {
        brzinaX += 10;
    }
}

function nesto_cool(){
    console.log("Cool feature");
}