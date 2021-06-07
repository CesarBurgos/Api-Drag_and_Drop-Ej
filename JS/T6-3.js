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
        location='Index.html';
    }
    
    if(idelemento === 'Eventos'){
        location='Events.html';
    }
    
    if(idelemento === 'Metodos'){
        location='Mets.html';
    }
    
    if(idelemento === 'Tutorial'){
        location='Tut.html';
    }
}

var anim=true;
function Archivo(){        
    if(anim){
        document.getElementById('Img').src = "Imagenes/Propiedades0.png";
        anim=false;
    }else{
        document.getElementById('Img').src = "Imagenes/Propiedades1.png";
        anim=true;
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

setInterval(Archivo,350);
setInterval(MoverIconos,80);

