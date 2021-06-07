function Redireccion(Direccion){    
    if(Direccion === 'Eventos'){
        location='Events.html';
    }
    
    if(Direccion === 'Metodos'){
        location='Mets.html';
    }
    
    if(Direccion === 'Propiedades'){
        location='Props.html';
    }
    
    if(Direccion === 'Tutorial'){
        location='Tut.html';
    }
}

let cambio=true, R = 255, G = 240, B = 0, i=0;
function Tit(){
    if(cambio){
        G=G-5;
        document.getElementById('titulo').style.background="rgba("+R+","+G+","+B+", .3)";
        i++;
        if(i===8){
            cambio=false;
        }
    }else{
        G=G+5;
        document.getElementById('titulo').style.background="rgba("+R+","+G+","+B+", .3)";
        i--;
        if(i===0){
            cambio=true;
            G = 240;
        }
    }
}

let desplaz=0, bandDrag=true;
function Drag_Drop(){        
    if(desplaz === 0){
        document.getElementById('ImgDrag').src = "Imagenes/Drag0.png";
    }
    
    if(desplaz === 1){
        document.getElementById('ImgDrag').src = "Imagenes/Drag1.png";
    }
    
    if(desplaz === 2){
        document.getElementById('ImgDrag').src = "Imagenes/Drag2.png";
    }
    
    if(desplaz === 3){
        document.getElementById('ImgDrag').src = "Imagenes/Drag3.png";
    }
    
    if(desplaz === 4){
        document.getElementById('ImgDrag').src = "Imagenes/Drag4.png";
    }
    
    if(desplaz === 5){
        document.getElementById('ImgDrag').src = "Imagenes/Drag5.png";
    }
    
    if(bandDrag){
        desplaz++;
        if(desplaz === 5){
            bandDrag=false;
        }
    }else{
        desplaz--;
        if(desplaz === 0){
            bandDrag=true;
        }
    }
}

let img=0, anim1;
function SelecOpc1(){
    document.getElementById('op1').style.backgroundColor = 'white';
    document.getElementById('op1').style.borderColor = 'black';
    document.getElementById('ImgE').style.visibility = 'visible';
    anim1=setInterval(Mano,300);
}
    
function Mano(){        
    if(img === 0){
        document.getElementById('ImgE').src = "Imagenes/Mano1.png";
    }
    
    if(img === 1){
        document.getElementById('ImgE').src = "Imagenes/Mano2.png";
    }
    
    if(img === 2){
        document.getElementById('ImgE').src = "Imagenes/Mano3.png";
    }
    
    if(img === 3){
        document.getElementById('ImgE').src = "Imagenes/Mano2.png";
    }
    
    if(img !== 3){
        img++;
    }else{
        img=0;
    }
}

function DeselecOpc1(){
    clearInterval(anim1);
    document.getElementById('op1').style.background = "rgba(0, 155, 255,.1)";
    document.getElementById('op1').style.borderColor = '#00D4FF';
    document.getElementById('ImgE').style.visibility = 'hidden';
}

let band2=true, anim2;
function SelecOpc2(){
    document.getElementById('op2').style.backgroundColor = 'white';
    document.getElementById('op2').style.borderColor = 'black';
    document.getElementById('ImgF').style.visibility = 'visible';
    anim2=setInterval(Engrane,120);
}
    
function Engrane(){        
    if(band2){
        document.getElementById('ImgF').src = "Imagenes/Engrane0.png";
        band2=false;
    }else{
        document.getElementById('ImgF').src = "Imagenes/Engrane1.png";
        band2=true;
    }
}

function DeselecOpc2(){
    clearInterval(anim2);
    document.getElementById('op2').style.background = "rgba(0, 155, 255,.1)";
    document.getElementById('op2').style.borderColor = '#00D4FF';
    document.getElementById('ImgF').style.visibility = 'hidden';
}

let band3=true, anim3;
function SelecOpc3(){
    document.getElementById('op3').style.backgroundColor = 'white';
    document.getElementById('op3').style.borderColor = 'black';
    document.getElementById('ImgP').style.visibility = 'visible';
    anim3=setInterval(Archivo,150);
}
    
function Archivo(){        
    if(band3){
        document.getElementById('ImgP').src = "Imagenes/Propiedades0.png";
        band3=false;
    }else{
        document.getElementById('ImgP').src = "Imagenes/Propiedades1.png";
        band3=true;
    }
}

function DeselecOpc3(){
    clearInterval(anim3);
    document.getElementById('op3').style.background = "rgba(0, 155, 255,.1)";
    document.getElementById('op3').style.borderColor = '#00D4FF';
    document.getElementById('ImgP').style.visibility = 'hidden';
}

let mov=0, mov2=true;
function MoverMensaje(){
    document.getElementById('mensaje').style.mozTransform = 'rotate('+mov+'deg)';
    document.getElementById('mensaje').style.webkitTransform = 'rotate('+mov+'deg)';
    if(mov2){
        //document.getElementById('mensaje').style.backgroundColor = '#F9F4B5';
        mov++;
        if(mov === 3){
            mov2=false;
        }
    }else{
        //document.getElementById('mensaje').style.backgroundColor = '#F9E2B5';
        mov--;
        if(mov === -3){
            mov2=true;
        }
    }
}

let mo=0, mo2=true;
function MovMensj(){
    document.getElementById('ImagenT').style.mozTransform = 'rotate('+mo+'deg)';
    document.getElementById('ImagenT').style.webkitTransform = 'rotate('+mo+'deg)';
    if(mo2){
        mo++;
        if(mo === 3){
            mo2=false;
        }
    }else{
        mo--;
        if(mo === -3){
            mo2=true;
        }
    }
}

setInterval(Tit,50); 
setInterval(Drag_Drop,120);
setInterval(MovMensj,120); 
setInterval(MoverMensaje,80);