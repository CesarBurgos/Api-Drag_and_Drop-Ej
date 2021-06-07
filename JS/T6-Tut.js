var mov=0, mov2=true;
const Icons = function (){
    document.getElementById('btn2').style.webkitTransform = 'rotate('+mov+'deg)';
    document.getElementById('btn3').style.webkitTransform = 'rotate('+mov+'deg)';
    document.getElementById('btn4').style.webkitTransform = 'rotate('+mov+'deg)';
    document.getElementById('btn5').style.webkitTransform = 'rotate('+mov+'deg)';
    
    if(mov2){
        mov++;
        if(mov === 3){
            mov2=false;
        }
    }else{
        mov--;
        if(mov === -3){
            mov2=true;
        }
    }
}

setInterval(Icons,100);

function Selec(elemento){
    elemento.style.margin = '10px auto';
    elemento.style.borderRadius = '15px';
    elemento.style.boxShadow = 'rgb(100,100,100) 0px 10px 10px';
}

function Deselec(elemento){
    elemento.style.margin = '0px auto';
    elemento.style.borderRadius = '0px';
    elemento.style.boxShadow = 'none';
}

var m=0, mo=true;
function MoverTit(){
    document.getElementById('tit').style.webkitTransform = 'translateX('+(m*100)+'px)';
    
    if(mov2){
        m++;
        if(m === 4000){
            mo=false;
        }
    }else{
        m--;
        if(m === -4000){
            mo=true;
        }
    }
}

const direccion = function (idelemento){
    if(idelemento === 'MenuDrag'){
        location='index.html';
    }

    if(idelemento === 'Eventos'){
        location='Events.html';
    }
    
    if(idelemento === 'Metodos'){
        location='Mets.html';
    }
    
    if(idelemento === 'Propiedades'){
        location='Props.html';
    }
}

const opcTut = function(NoOpc){
    if(NoOpc === 1){
        document.getElementById('Ejemplos').src="Tutoriales/Tut1.html";
    }
    
    if(NoOpc === 2){
        document.getElementById('Ejemplos').src="Tutoriales/Tut2.html";
    }
    
    if(NoOpc === 3){
        document.getElementById('Ejemplos').src="Tutoriales/Tut3.html";
    }
    
    if(NoOpc === 4){
        document.getElementById('Ejemplos').src="Tutoriales/Tut4.html";
    }
}

function Sel1(elemento){    
    elemento.style.background = "rgba(255, 255, 255 ,.3)";
    elemento.style.borderColor = '#000000';
    elemento.style.borderStyle = 'double';
}

function Des1(elemento){
    elemento.style.background = "rgba(255, 89, 0 ,.3)";
    elemento.style.borderColor = '#FF0000';
    elemento.style.borderStyle = 'ridge';
}

function Des2(elemento){
    elemento.style.background = "rgba(0, 185, 255,.3)";
    elemento.style.borderColor = '#00B9FF';
    elemento.style.borderStyle = 'ridge';
}