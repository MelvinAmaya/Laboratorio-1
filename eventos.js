





function eventClick(){
    let n1 ,n2,n3,nn1,nn2,nn3,notaF
    n1 = Number(prompt('Ingrese la Primera nota: '))
    n2 = Number(prompt('Ingrese la Segunda nota: '))
    n3 = Number(prompt('Ingrese la Tercera nota: '))

     nn1 = n1*0.10
     nn2 = n2*0.30
     nn3 = n3*0.60
   
    notaF = nn1+nn2+nn3

    if(notaF<6){
        alert('Tu nota es: '+ notaF + ', Has Reprobado')
    }
    else if(notaF>=4 && notaF<=5.9){
        alert('Tu nota es: ' + notaF + ', Iras a Suficiencia ')
    }
    else if(notaF>=6){
        alert('Has Aprobado con una nota de: ' + notaF)
    }
   
}
function movimientoEvento(){
    //alert("Evento mouse move")
    let ima = document.getElementById("imagen")
    let titulo = document.getElementById("titu")
    titulo.innerHTML = "Evento onmouseout"
    ima.src = "/img/mouseover-mouseout.svg"
    let texto = document.getElementById("texto2")
    texto.innerHTML = "El evento onmouseout ocurre cuando el puntero del mouse se mueve fuera de un elemento o fuera de uno de sus elementos secundarios. "
}

function keyDown(){
    alert("Has presionado una tecla.")
}

function focu(){
    
    var focus = document.getElementById('inpu')
    focus.style.background = 'green'
}
function infocu(){
     document.getElementById('inpu').style.background = 'white'
}


function me_sali(){
    let ima = document.getElementById("imagen")
    ima.src = "/img/1215156829_preview_Sin título.png"
    let titulo = document.getElementById("titu")
    titulo.innerHTML = "Evento onmousemove"
    let texto = document.getElementById("texto2")
    texto.innerHTML = "¿Qué es Onmouseout? El evento onmouseout ocurre cuando el puntero del mouse se mueve fuera de un elemento o fuera de uno de sus elementos secundarios."
}

