
function exibirResultado(){
    var display = document.getElementById('princebb').style.display;
        if(display == "none") {
            document.getElementById('pribb__img').style.display = 'none';
        
            document.getElementById('princebb').style.display = 'block';
        }
}

function criptografar(){
    let resultado = document.getElementById('input').value
    resultado = resultado.replaceAll("e","enter")
    resultado = resultado.replaceAll("i","imes")
    resultado = resultado.replaceAll("a", "ai")
    resultado = resultado.replaceAll("o","ober")
    resultado = resultado.replaceAll("u", "ufat")
    document.getElementById('result').value = resultado
    exibirResultado()
}



function descriptografar(){
    let resultado = document.getElementById('input').value
    resultado = resultado.replaceAll("enter","e")
    resultado = resultado.replaceAll("imes","i")
    resultado = resultado.replaceAll("ai", "a")
    resultado = resultado.replaceAll("ober","o")
    resultado = resultado.replaceAll("ufat", "u")
    document.getElementById('result').value = resultado
    exibirResultado()
}

function copiar(){
  let copia = document.getElementById('result')
  copia.select()
  document.execCommand("copy")
    
}