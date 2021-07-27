function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4
}
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado
}



function perimetroTriangulo(base, lado2, lado1){
    return base + lado2 + lado1
}
function areaTriangulo(base, altura){
    return (base * altura) /2
}


function perímetroCirculo(radio){
    return radio * (2 * Math.PI)
}
const areaCirculo = (radio) => {
    return radio * radio * Math.PI
}

const calcularPCuadrado = () => {
    let input = document.getElementById('inputCuadro')
    alert(perimetroCuadrado(input.value))
}
const calcularACuadrado = () => {
    let input = document.getElementById('inputCuadro')
    alert(perimetroCuadrado(input.value))
}

const calcularAlturaIso = (lado1, lado2, lado3) =>{
    let base = 0
    let lado
    if(lado1 * lado2 * lado3 <= 0){
        alert('Todos los lados deben tener una longitud mayor a 0.')
    } else {
        // Identificación de la base y comprovación de lados iguales.
        if(lado1 == lado2){
            base = lado3
            lado = lado1
        }else if(lado1 == lado3){
            base = lado2
            lado = lado1
        }else if(lado2 == lado3){
            base = lado1
            lado = lado2
        }
        // Validación de la base y longitud inferior a la suma de los lados restantes.
        if(base == 0 || base >= (lado * 2)){
            alert('¡Error! Un triángulo isosceles, tiene al menos dos lados iguales.')
        } else {
            alert(`La altura del triángulo isosceles es: ${Math.sqrt(Math.pow(lado, 2) + Math.pow((base/2), 2))}`)
        }
    }
    
}
