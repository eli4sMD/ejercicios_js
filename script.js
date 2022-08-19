// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function resMul(x,z){
    if (x<z) {
        let divi=z/x
        return divi
    } else{
        let multi=x*z
        return multi
    }
}
console.log(resMul(5,10))


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function tipoElem(a){
    let tipo=typeof(a)
    return tipo
}
console.log(tipoElem("nashe"))

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function cadena(a,b,c,d,e,f){
    suma=a+b
    resta=suma-c
    multip=resta*d
    divi=multip/e
    pot=Math.pow(divi, f)
	return pot
}
console.log(cadena(6,5,4,3,2,2))

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function tresElem([a,b,c,d,e]){
    let numer = [a,b,c,d,e]
    let ultelem = [numer[numer.length-1], numer[numer.length-2], numer[numer.length-3]]
	return ultelem
}
console.log(tresElem([1,2,3,4,5]))

// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ordenar([a,b,c,d,e]){
    letras = [a,b,c,d,e]
    ordenao = letras.sort()
	return ordenao
}
console.log(ordenar(["f","t","l","a","o"]))

// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

function purga(a,b){
    for (let key of a){
        if (key==b) {
            a.splice(a.indexOf(b), 1)
        }
    }
    return a
}
console.log(purga([1,2,3], 2))

// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function sumNum([a,b,c,d,e,f]){
    num = [a,b,c,d,e,f]
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
	return sum
}
console.log(sumNum([1,2,3,4,5,6]))



// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

const busqueda = (pato, str) => {
    for (let key of Object.entries(pato)){
      if(`${key[0]}` == str){
       return key[1];
      }
    }
  }
console.log(busqueda({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre'))
// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

function suma(obj){
    let suma =0;
    for (let key of Object.entries(obj)){
     suma+=key[1]; 
    }
    return suma;
  }