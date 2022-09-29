document.querySelector('.iniciar').addEventListener('click',()=>{

    const seg= document.getElementById('dato').value;

    const tiemp= document.getElementById('contador');
  
    function temporizador(segundos){
        console.log(segundos)
        if (segundos === 0){
            return tiemp.value = 'Fin';
        }else{
            tiemp.value=segundos
            setTimeout(temporizador,1000,segundos-1)
        }
    }
    temporizador(seg);
})