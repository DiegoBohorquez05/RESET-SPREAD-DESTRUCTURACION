let tiempo=document.getElementById("dato")

let temporizador =function(tiempo){
    if(tiempo===0){
        return "fin"
    }else{
        // return setTimeout(temporizador,1000,tiempo-1)
    }
}

// let boton=document.getElementById("iniciar")
// boton.addEventListener('click',temporizador)

console.log(temporizador(0))