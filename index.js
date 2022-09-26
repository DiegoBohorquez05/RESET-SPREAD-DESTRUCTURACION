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

// Separar en datos individuales un grupo de valores

const miEmpresa=["COEX","Conocimiento","Exponencial"]
const sobreMiEmpresa=["El","nombre","de mi","empresa es:",...miEmpresa]

console.log(sobreMiEmpresa)

//Destructuracion

const vec=[10,20,30]
let numero1=vec[0]
let numero2=vec[1]
let numero3=vec[2]
const [num1,num2,num3]=vec
console.log(num1)
console.log(num2)
console.log(num3)

//-------------------------

const usuario={
    documento: 1098,
    nombre: "Max Steal",
    verificado: true
}
const {documento,nombre,verificado}=usuario
console.log(documento)
console.log(nombre)
console.log(verificado)