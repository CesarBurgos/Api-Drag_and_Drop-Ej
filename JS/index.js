/* Funciones utilizadas en la interacción de la página index.html 

    Created on : 13/03/2020, 12:52:38 PM
    Author     : Cesar*/

var i=45,j=40, EstImag=false;
function AnimImagen(){
    if(!EstImag){
        i++;
        j++;
        if(i >= 90 && j >= 80){
            EstImag = true;
        }
    }else{
        i--;
        j--;
        if(i === 45 && j === 40){
            EstImag = false;
        }                    
    }
    document.getElementById('ImagenT').setAttribute('width',i);
    document.getElementById('ImagenT').setAttribute('height',j);
    document.getElementById('ImagenT2').setAttribute('width',i);
    document.getElementById('ImagenT2').setAttribute('height',j);
}

function SeleccOpcionB1(){
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b1').value = 'Consultar';
    document.getElementById('Imagenb1').style.visibility = 'visible';
    document.getElementById('opc1').style.backgroundColor = '#DFFFFF';
}

function DeseleccOpcionB1(){
    document.getElementById('b1').style.background = "#F3E2A9";
    document.getElementById('b1').value = ' 1° Tema ';
    document.getElementById('Imagenb1').style.visibility = 'hidden';
    document.getElementById('opc1').style.backgroundColor = 'transparent';
}

function SeleccOpcionB2(){
    document.getElementById('b2').style.backgroundColor = "white";
    document.getElementById('b2').value = 'Consultar';
    document.getElementById('Imagenb2').style.visibility = 'visible';
    document.getElementById('opc2').style.backgroundColor = '#DFFFFF';
}

function DeseleccOpcionB2(){
    document.getElementById('b2').style.background = "#A9F5A9";
    document.getElementById('b2').value = ' 2° Tema ';
    document.getElementById('Imagenb2').style.visibility = 'hidden';
    document.getElementById('opc2').style.backgroundColor = 'transparent';
}

function SeleccOpcionB3(){
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById('b3').value = 'Consultar';
    document.getElementById('Imagenb3').style.visibility = 'visible';
    document.getElementById('opc3').style.backgroundColor = '#DFFFFF';
}

function DeseleccOpcionB3(){
    document.getElementById('b3').style.background = "#A9D0F5";
    document.getElementById('b3').value = ' 3° Tema ';
    document.getElementById('Imagenb3').style.visibility = 'hidden';
    document.getElementById('opc3').style.backgroundColor = 'transparent';
}

function SeleccOpcionB4(){
    document.getElementById('b4').style.backgroundColor = "white";
    document.getElementById('b4').value = 'Consultar';
    document.getElementById('Imagenb4').style.visibility = 'visible';
    document.getElementById('opc4').style.backgroundColor = '#DFFFFF';
}

function DeseleccOpcionB4(){
    document.getElementById('b4').style.background = "#E2A9F3";
    document.getElementById('b4').value = ' 4° Tema ';
    document.getElementById('Imagenb4').style.visibility = 'hidden';
    document.getElementById('opc4').style.backgroundColor = 'transparent';
}

function SeleccOpcionB5(){
    document.getElementById('b5').style.backgroundColor = "white";
    document.getElementById('b5').value = 'Consultar';
    document.getElementById('Imagenb5').style.visibility = 'visible';
    document.getElementById('opc5').style.backgroundColor = '#DFFFFF';
}

function DeseleccOpcionB5(){
    document.getElementById('b5').style.background = "#F5A9A9";
    document.getElementById('b5').value = ' 5° Tema ';
    document.getElementById('Imagenb5').style.visibility = 'hidden';
    document.getElementById('opc5').style.backgroundColor = 'transparent';
}

function SeleccOpcionB6(){
    document.getElementById('b6').style.backgroundColor = "white";
    document.getElementById('b6').value = 'Consultar';
    document.getElementById('Imagenb6').style.visibility = 'visible';
    document.getElementById('opc6').style.backgroundColor = '#DFFFFF';
}

function DeseleccOpcionB6(){
    document.getElementById('b6').style.background = "#E6E6E6";
    document.getElementById('b6').value = ' 6° Tema ';
    document.getElementById('Imagenb6').style.visibility = 'hidden';
    document.getElementById('opc6').style.backgroundColor = 'transparent';
}

function Redireccion(Direccion){
    if(Direccion === 'Inf'){
        location='Info.html';
    }
    
    if(Direccion === 'T1'){
        
    }
    
    if(Direccion === 'T2'){
        
    }
    
    if(Direccion === 'T3'){
        
    }
    
    if(Direccion === 'T4'){
    
    }
    
    if(Direccion === 'T5'){
        
    }
    
    if(Direccion === 'T6'){
        location='Tema6_1.html';
    }
}