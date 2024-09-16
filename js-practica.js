// Ejemplos de funciones varias

// Problema: diseñar una funcion que pille un numero como parametro y lo eleve al cuadrado

function squareIt(a) {

    let result = a ** 2

    return result
}


/* PROBLEMA 1 Y 1.BIS: diseñar una funcion PURA que de una lista de los primeros N cuadrados  
            
    -> NO SE PUEDE HACER UNA FUNCION RECURSIVA PURA QUE GENERE UN ARRAY CON LOS RESULTADOS PORQUE EN CADA ITERACION LO VAMOS A IR SOBREESCRIBIENDO
    
    -> SE PUEDE HACER CON UNA FUNCION RECURSIVA PERO IMPURA MODIFICANDO UN ARRAY GLOBAL FUERA DE SU BLOQUE

    -> SE PUEDE HACER CON UNA FUNCION RECURSIVA Y PURA MODIFICANDO EL ARRAY EN LA LLAMADA A LA RECURSIVIDAD

*/


/*function squareFirstN(a, n) {

    const listNSquares = []

    function squareRecur(a, n) {   -----> NUESTRA IDEA DE ANIDAR UNA FUNCION RECURSIVA NO FUNCIONA ¿POR QUÇ

        if (a > n) {

            return

        } else {

            console.log(a)
            listNSquares.push(squareIt(a))
            console.log(listNSquares)

        }

    } return squareRecur(a + 1, n)
}

squareFirstN(0, 10)

*/



/* PROBLEMA 1 Y 1.BIS: diseñar una funcion PURA que de una lista de los primeros N cuadrados 

    ---VERSION A: FUNCION RECURSIVA PERO IMPURA PARA PODER MODIFICAR EL ARRAY

*/


const listNSquares = []
function squareFirstN(a, n) {


    if (a > n) {

        return

    } else {

        console.log(a)
        listNSquares.push(squareIt(a))
        console.log(listNSquares)

    } return squareFirstN(a + 1, n)

} 

console.log('PRACTICA JS - Problema 1: solucion version A (funcion recursiva pero impura para poder modificar este array) ')


/* PROBLEMA 1- VERSION B: FUNCION RECURSIVA Y PURA QUE GENERA UN ARRAY CON UNOS RESULTADOS 

        -> PARA ESCAPAR DE LA LIMITACION DE LAS FUNCIONES RECURSIVAS PURAS A LA HORA DE GENERAR OBJETOS CON RESULTADOS
            LO QUE VAMOS A HACER ES MODIFICAR EL OBJETO DENTRO DE LA LLAMADA A LA RECURSIVIDAD 

*/

function squareFirstX (a, n){

    
    if (a > n) {

        return []


    } else {

        console.log('El numero a evaluar es: ' + n)

        return [a*a].concat(squareFirstX(a+1, n))
    
    }
    
    return squareFirstX(a, n)

}