document.querySelector('.iniciar').addEventListener('click',()=>{
    const seg= document.getElementById('dato').value;
    const divseg= document.getElementById('dato');
    const tiemp= document.getElementById('contador');
    tiemp.disabled=true
    function temporizador(segundos){
        if (segundos === -1){
            divseg.disabled = false;
            alert("FIN")
            document.getElementById('dato').value="";
            document.getElementById('contador').value="";
        }else if(segundos === "a" || segundos ==="b" || segundos ==="c" || segundos ==="d" || segundos ==="e" || segundos ==="f" || segundos ==="g"||segundos ==="h"||segundos ==="i"||segundos ==="j"||segundos ==="k"||segundos ==="l"||segundos === "ñ"||segundos ==="m"||segundos ==="n"||segundos ==="o"||segundos ==="p"||segundos ==="q"||segundos ==="r"||segundos ==="s"||segundos ==="t"||segundos ==="u"||segundos ==="v"||segundos ==="w"||segundos ==="x"||segundos ==="y"||segundos ==="z" || segundos === "A" || segundos ==="B" || segundos ==="C" || segundos ==="D" || segundos ==="E" || segundos ==="F" || segundos ==="G"||segundos ==="H"||segundos ==="I"||segundos ==="J"||segundos ==="K"||segundos ==="L"||segundos === "Ñ"||segundos ==="M"||segundos ==="N"||segundos ==="O"||segundos ==="P"||segundos ==="Q"||segundos ==="R"||segundos ==="S"||segundos ==="T"||segundos ==="U"||segundos ==="V"||segundos ==="W"||segundos ==="X"||segundos ==="Y"||segundos ==="Z"){
        alert("No se puede hacer cuenta regresiva con numeros")
        document.getElementById('dato').value="";
        document.getElementById('contador').value="";
        }else{
            tiemp.value=segundos
            setTimeout(temporizador,1000,segundos-1)
            divseg.disabled = true;
        }
    }
    temporizador(seg);
})

// falta mirar como hacer para que el contador se pare y no siga avanzando si se oprime el reset
document.querySelector('.reset').addEventListener('click',()=>{
    const divseg= document.getElementById('dato');
    divseg.disabled = false;
    document.getElementById('dato').value="";
    document.getElementById('contador').value=0;
})
