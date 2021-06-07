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

function Direccionamiento(idelemento){    
    if(idelemento === 'MenuDrag'){
        location='index.html';
    }
    
    if(idelemento === 'Metodos'){
        location='Mets.html';
    }
    
    if(idelemento === 'Propiedades'){
        location='Props.html';
    }
    
    if(idelemento === 'Tutorial'){
        location='Tut.html';
    }
}

let img=0;    
function Mano(){        
    if(img === 0){
        document.getElementById('Img').src = "Imagenes/Mano1.png";
    }
    
    if(img === 1){
        document.getElementById('Img').src = "Imagenes/Mano2.png";
    }
    
    if(img === 2){
        document.getElementById('Img').src = "Imagenes/Mano3.png";
    }
    
    if(img === 3){
        document.getElementById('Img').src = "Imagenes/Mano2.png";
    }
    
    if(img !== 3){
        img++;
    }else{
        img=0;
    }
}

var mov=0, mov2=true;
function MoverIconos(){
//    document.getElementById('tutorial').style.mozTransform = 'rotate('+mov+'deg)';
//    document.getElementById('btn2').style.mozTransform = 'rotate('+mov+'deg)';
//    document.getElementById('btn3').style.mozTransform = 'rotate('+mov+'deg)';
//    document.getElementById('btn4').style.mozTransform = 'rotate('+mov+'deg)';
    
    document.getElementById('tutorial').style.webkitTransform = 'rotate('+mov+'deg)';
    document.getElementById('btn2').style.webkitTransform = 'rotate('+mov+'deg)';
    document.getElementById('btn3').style.webkitTransform = 'rotate('+mov+'deg)';
    document.getElementById('btn4').style.webkitTransform = 'rotate('+mov+'deg)';
    
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

setInterval(Mano,280);
setInterval(MoverIconos,80);