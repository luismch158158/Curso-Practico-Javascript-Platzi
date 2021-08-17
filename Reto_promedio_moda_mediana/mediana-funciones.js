function calcularMediana (lista1){

    lista1.sort(function(a, b){return a - b}); 
    
    const mitadLista = parseInt(lista1.length / 2);

    let mediana;

    function esPar(numerito){
        if (numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    
    function calcularMediaAritmetica(lista1){
        const sumaLista1 = lista1.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista1 = sumaLista1/lista1.length;
    
        return promedioLista1;
    }
    
    if (esPar(lista1.length)){
        const elemento1 = lista1[mitadLista- 1];
        const elemento2 = lista1[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
        return "La lista es " + lista1 + " y la mediana es " + mediana;
        
    
    } else {
        mediana = lista1[mitadLista];
        return "La lista es " + lista1 + " y la mediana es " + mediana;
        

    }
    
}

