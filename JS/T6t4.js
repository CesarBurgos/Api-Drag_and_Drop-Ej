// _____________________________________________________________________________ Tutorial 4
function iniciar(){
    soltar=document.getElementById('Destino4');
    soltar.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false); 
} 

function soltado(e){
    e.preventDefault();
    var archivos=e.dataTransfer.files;
    var lista='<div id="Info"><br><table>';
    for(var f=0;f<archivos.length;f++){
        if(archivos[f].type.indexOf("audio/") === 0){
            lista+="<tr><td><br><center><img id=\"imagen\" src=\"../Imagenes/Fig6.png\" width=\"80\" height=\"110\"/>";
        }else{
            if(archivos[f].type.indexOf("image/") === 0){
                lista+="<tr><td><br><center><img id=\"imagen\" src=\"../Imagenes/Fig9.png\" width=\"80\" height=\"110\"/>";
            }else{
                if(archivos[f].type.indexOf("video/") === 0){
                    lista+="<tr><td><br><center><img id=\"imagen\" src=\"../Imagenes/Fig7.png\" width=\"80\" height=\"110\"/>";
                }else{
                    if(archivos[f].type === "application/pdf" || archivos[f].type === "text/plain" || archivos[f].type.indexOf("application/vnd.openxmlformats-officedocument.") === 0){
                        lista+="<tr><td><br><center><img id=\"imagen\" src=\"../Imagenes/Fig5.png\" width=\"80\" height=\"110\"/>";
                    }else{
                        if(archivos[f].type === 'text/javascript' || archivos[f].type === 'text/html' || archivos[f].type === 'text/css'){
                            lista+="<tr><td><br><center><img id=\"imagen\" src=\"../Imagenes/Fig10.png\" width=\"80\" height=\"110\"/>";
                        }else{
                            lista+="<tr><td><br><center><img id=\"imagen\" src=\"../Imagenes/Fig0.png\" width=\"80\" height=\"110\"/>";
                        }
                    }
                }
            }
        }
        
        if(archivos[f].type === "")
            lista+="</center><br><br></td><td><p class=\"Arch\" id=\"archivo\"><b> Nombre: </b>" + archivos[f].name + "<br><b> Tipo: </b> ¿? <br><b> Tamaño: </b>" + archivos[f].size + " bytes </p><hr></td></tr>";   
        else
            lista+="</center><br><br></td><td><p class=\"Arch\" id=\"archivo\"><b> Nombre: </b>" + archivos[f].name + "<br><b> Tipo: </b>" + archivos[f].type + "<br><b> Tamaño: </b>" + archivos[f].size + " bytes </p><hr></td></tr>";
    }
    lista+='</table></div>';
    soltar.innerHTML=lista;
}

function Reset(){
    document.getElementById('Destino4').innerHTML= "<p class=\"TextTut1\" id=\"text1\"><br><br><b> Área Destino:</b><br> Arrastre aquí algún archivo de su computadora.</p>";
}

window.addEventListener('load', iniciar, false);