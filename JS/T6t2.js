// _____________________________________________________________________________ Tutorial 2
let Imgn=4;

const NoImg = function (){
    let Valor = parseInt(document.getElementById('NImg').value);

    if(Valor >= 1 && Valor <= 4){
        Imgn = Valor;
        document.getElementById('adver').innerHTML='<b> Se Descartará a la Imagen: '+Valor+' </b>';
    }else{
        Imgn = 4;
        document.getElementById('adver').innerHTML='<b> ¡Error! </b> Se Descartará a la Imagen: [4] Predeterminadamente.';  
    }
    
    document.getElementById('Destino2').innerHTML='<p class="TextTut1" id="text1"><b>- Área Destino -</b><br><br>Verificación de IMAGENES admitidas</p>';
}

function iniciar(){
    let imagenes=document.querySelectorAll('#Objetos2 > img');
    
    for(let i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    } 
    
    soltar=document.getElementById('Destino2');   
    soltar.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false); 
} 

function arrastrado(e){
    elemento=e.target; 
    e.dataTransfer.setData('Text', elemento.getAttribute('id')); 
}

function soltado(e){
    e.preventDefault();
    let id=e.dataTransfer.getData('Text');
    if(id !== "imagen"+Imgn){
        let src=document.getElementById(id).src;
        if(id === "imagen4")
            soltar.innerHTML='<p class="TextTut1" id="text1"><b>- Imagen Admitida -</b></p><img src="'+src+'" width="130" height="140">';
        else
            soltar.innerHTML='<p class="TextTut1" id="text1"><b>- Imagen Admitida -</b></p><img src="'+src+'" width="150" height="140">';
    }else{ 
        soltar.innerHTML='<br><br><p class="TextTut1" id="text1"><b> Vaya... <br>Esta Imagen No será Admitida :( </b></p>';  
    }
}

function Reset(){
    Imgn=4;
    document.getElementById('NImg').value=4;
    document.getElementById('adver').innerHTML='<b> Se Descartará a la Imagen: 4 </b>';
    document.getElementById('Destino2').innerHTML='<p class="TextTut1" id="text1"><b>- Área Destino -</b><br><br>Verificación de IMAGENES admitidas</p>';
}

window.addEventListener('load', iniciar, false);