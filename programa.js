console.log("hi world");

function multiply(a, b) {
 console.log("El resultado de la multiplicación es: " + a*b);
}

//arrow function de la anterior function
const multiplicación = (a, b) =>console.log("El resultado es: " + a*b);

const array_int = [3, 5, 7, 8];
array_int.map(x => console.log(Math.pow(x, 2)));

// estoy agrenado esta linea desde el github
console.log("Creo que con este ya entendí el push");
 // la idea es un pull, ya que entendí el push

 // el git fetch, te muestra todos lo cambios que se han realizado, pero no los combina
 // en cambio, el git pull, muestra y combina los cambios que se han realizado

// esta linea es para probar el git fetch
function prueba_fetch(){
 return "Está utilizando el git-fetch";
}
console.log(prueba_fetch());
