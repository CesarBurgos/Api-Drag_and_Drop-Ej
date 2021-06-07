// _____________________________________________________________________________ Tutorial 1
let correcto=false;
function iniciar(){
    origen1=document.getElementById('imagen');
    origen1.addEventListener('dragstart', arrastrado, false);
    origen1.addEventListener('dragend', finalizado, false);
    
    soltar=document.getElementById('Destino');
    soltar.addEventListener('dragenter', entrando, false);
    soltar.addEventListener('dragleave', saliendo, false);
    soltar.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);
    
    Objeto=document.getElementById('Objetos');
}

function entrando(e){
    e.preventDefault();
    soltar.style.background='rgba(0,150,0,.2)';
}
    
function saliendo(e){
    e.preventDefault();
    soltar.style.background='rgba(157, 161, 255,.2)';
}

function finalizado(e){
    elemento=e.target;
    if(correcto){
        soltar.style.background='rgba(0,150,0,.2)';
        document.getElementById('text2').innerHTML=" <br> Vaya ... <br><br>¡¡ El Objeto ha sido colocado CORRECTAMENTE!! ";
        elemento.style.visibility='hidden';
    }else{
        soltar.style.background='rgba(150,0,0,.2)';
        soltar.innerHTML="<p class=\"TextTut1\" id=\"text1\"><b><br><br> Error :( </b></p>";
        document.getElementById('text2').innerHTML=" <br> Vaya ... <br><br>¡¡ El Objeto no ha sido arrastrado y colocado en su DESTINO!! ";
        elemento.style.visibility='hidden';
    }
}

function arrastrado(e){
    var codigo='<img src="'+origen1.getAttribute('src')+'" width="230" height="200">';
    e.dataTransfer.setData('Elemento', codigo);
    
    document.getElementById('text1').style.fontWeight = "bold";
    document.getElementById('text1').innerHTML='¡¡Coloca tu elemento aquí!!';
} 

function soltado(e){
    e.preventDefault();
    soltar.innerHTML=" <br>"+e.dataTransfer.getData('Elemento');
    correcto=true;
}

function Reset(){
    correcto=false;
    elemento.style.visibility='visible';
    soltar.style.background='rgba(157, 161, 255,.2)';
    soltar.innerHTML="<p class=\"TextTut1\" id=\"text1\"><b>- Área Destino -</b><br><br>Dentro de este recuadro.<br>Coloque el elemento a arrastrar.</p>";
    document.getElementById('text2').innerHTML=" Haga Clic en su objeto y arrastrelo hacia su Destino: ";
}

window.addEventListener('load', iniciar, false);