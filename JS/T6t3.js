// _____________________________________________________________________________ Tutorial 3
var Img1=0, Img2=0, Img3=0, Img4=0;

function iniciar(){
    var imagenes=document.querySelectorAll('#Objetos3 > img');
    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar=document.getElementById('lienzo');
    lienzo=soltar.getContext('2d'); 
    soltar.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false); 
}

function finalizado(e){
    e.preventDefault();
    if(Img1 === 8){
        document.getElementById('imagen1').style.visibility='hidden';
    }
    
    if(Img2 === 8){
        document.getElementById('imagen2').style.visibility='hidden';
    }
    
    if(Img3 === 8){
        document.getElementById('imagen3').style.visibility='hidden';
    }
    
    if(Img4 === 8){
        document.getElementById('imagen4').style.visibility='hidden';
    }
}

function arrastrado(event){
    elemento=event.target;
    event.dataTransfer.setData('Text', elemento.getAttribute('id'));
    event.dataTransfer.setDragImage(event.target, 0, 0);
}

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    var IMG=document.getElementById(id);
    var posx=(e.pageX-soltar.offsetLeft) - 602;
    var posy=(e.pageY-soltar.offsetTop) - 440; 

    document.getElementById('Coord').innerHTML='De acuerdo al puntero, la última imagen fue colocada en las Coordenadas [X: '+posx+' - Y: '+posy+']';

    if(id === "imagen1"){ Img1++; lienzo.drawImage(IMG,posx,posy,150,140); }
    if(id === "imagen2"){ Img2++; lienzo.drawImage(IMG,posx,posy,150,140); }
    if(id === "imagen3"){ Img3++; lienzo.drawImage(IMG,posx,posy,150,140); }
    if(id === "imagen4"){ Img4++; lienzo.drawImage(IMG,posx,posy,130,140); }
}

function Reset(){
    Img1=0;Img2=0;Img3=0;Img4=0;
    lienzo.clearRect(0, 0, soltar.width, soltar.height);
    for(var j=1; j<5; j++){
        document.getElementById('imagen'+j).style.visibility='visible';
    }
    document.getElementById('Coord').innerHTML='...';
}

window.addEventListener('load', iniciar, false);