// 4. Filtrar productos en stock y con precio menor a 50

const productos = [
    { nombre: "Camisa", precio: 30, enStock: true },
    { nombre: "Pantalón", precio: 60, enStock: true },
    { nombre: "Zapatos", precio: 45, enStock: false },
    { nombre: "Sombrero", precio: 70, enStock: true }
];

const enStockYCincuenta = productos.filter(function (element, index) {

    let newObject = {}
    
    let arrKeys = Object.keys(productos)

    for (let i = 0 ; i < arrKeys.length ; i++)

        if (element.enStock === true){

            if (element.precio > 50 ) {

                newObject[arrKeys] = element[arrKeys]
                
                return newObject
            }
        }
} )

//console.log(enStockYCincuenta)



/* 5. Filtrar elementos únicos de un array

const numerosUnicos = numerosRepetidos.filter(
    
*/

const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 5, 6]


