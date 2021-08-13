//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
} 

function areaCuadrado (lado) {
    return lado * lado;
} 

console.groupEnd();

//Código del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    const a = Number(lado1);
    const b = Number(lado2);
    const c = Number(base);
    return (a+b+c);
};

function areaTriangulo(base, altura){
    return (base * altura) /2;
}

console.groupEnd();

//Código del circulo
console.group("Círculo");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;


// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio){
    return radio * radio * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML

// Aqui es para el cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Aqui es para el triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const perimetro = perimetroTriangulo(value1,value1,value1);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTrianguloh");
    const altura = input2.value;

    const area = areaTriangulo(value1,altura);
    alert(area);
}

// Aqui es para el circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
