// Funciones con parametros indefinidos

function sumar(...valores){
    let suma=0
    for(let i=0;i<valores.length;i++){
        suma+=valores[i]
    }
    return suma
}
console.log(sumar(1,2))
console.log(sumar(5,6,4))
console.log(sumar(20,30,40,50,60,70,80,90,100))

//Funciones con parametros definidos

function sumar3(a,b,z=2){
    return sumar3=a+b+z
}
console.log(sumar3(1,2))
//Si se da valor en z, esta se reemplaza

//--------------------------------------------

// Separar en datos individuales un grupo de valores

const miEmpresa=["COEX","Conocimiento","Exponencial"]
const sobreMiEmpresa=["El","nombre","de mi","empresa es:",...miEmpresa]

console.log(sobreMiEmpresa)

//------------------------------------

//Destructuracion

//Arreglos
const vec=[10,20,30]
let numero1=vec[0]
let numero2=vec[1]
let numero3=vec[2]
const [num1,num2,num3]=vec
console.log(num1)
console.log(num2)
console.log(num3)


//Objetos
const usuario={
    documento: 1098,
    nombre: "Max Steal",
    verificado: true
}
const {documento,nombre,verificado}=usuario
console.log(documento)
console.log(nombre)
console.log(verificado)

//--------------------------------------

//Recursion

const parImpar=(num)=>{
    if(num==0){
        return "par"
    }else if(num==1){
        return "impar"
    }else{
        return parImpar(num-2)
    }
}

console.log(parImpar(5))


//Potenciacion
function potenciar(base,poten){
    if(poten==1){
        return base
    }else{
        return base*potenciar(base,poten-1)
    }
}
console.log(potenciar(2,3))
console.log(potenciar(2,1))