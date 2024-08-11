arrayAnimal=[];

class Animal {
    constructor (nombre, raza, consumoDiario, consumoTotal,costoBalanceadoPromedio) {
        this.nombre=nombre;
        this.raza=raza;
        this.consumoDiario=consumoDiario;
        this.consumoTotal=consumoTotal;
        this.costoBalanceadoPromedio=costoBalanceadoPromedio;

        arrayAnimal.push(this);
    }
}

const gallinasLohmanMarron = new Animal("Gallina Ponedora", "Lohman Marron", 0.12 , 6 , 315);
const gallinasLeghorn = new Animal("Gallina Ponedora", "Leghorn", 0.10 , 5 , 315);
const pollosParrilleros = new Animal("Parrillero Terminador", "Broiler", null, 5.2 , 355);
const cerdos = new Animal ("Cerdos", "" , 2.5, null , 340);
const bovinos = new Animal ("Novillos", "Hereford", null, 1260 , 290)

alert("A continuacion, elija un animal para ingresar a la calculadora");

let opcionesAnimal = "";
arrayAnimal.forEach((animal, indice) => {
    opcionesAnimal += `     ${indice + 1}: ${animal.nombre} ${animal.raza}\n`;
});

let eleccionAnimal ="";
do{
eleccionAnimal = parseInt(prompt(`Elija un número:\n${opcionesAnimal}`),10);
} while (isNaN(eleccionAnimal) || eleccionAnimal<1 || eleccionAnimal>arrayAnimal.length );

alert(`Has elegido ${arrayAnimal[eleccionAnimal-1].nombre} ${arrayAnimal[eleccionAnimal-1].raza}`);
let cantidadAnimales =0;
do{cantidadAnimales=parseInt(prompt("Ingrese la cantidad de animales a criar"))}while(cantidadAnimales<1 || isNaN(cantidadAnimales));

let mensajeConsumoDiario ="";
let mensajeConsumoTotal ="";



if (arrayAnimal[eleccionAnimal-1].consumoDiario!=null){
    mensajeConsumoDiario=`El consumo de sus animales sera de ${arrayAnimal[eleccionAnimal-1].consumoDiario*cantidadAnimales} Kg por día, con un costo diario de $${arrayAnimal[eleccionAnimal-1].consumoDiario*cantidadAnimales*arrayAnimal[eleccionAnimal-1].costoBalanceadoPromedio}\n`
};

if (arrayAnimal[eleccionAnimal-1].consumoTotal!=null){
    mensajeConsumoTotal=`El consumo para recriar sus animales sera de ${arrayAnimal[eleccionAnimal-1].consumoTotal*cantidadAnimales} Kg desde nacimiento hasta produccion, con un costo total aproximado de $${arrayAnimal[eleccionAnimal-1].consumoTotal*cantidadAnimales*arrayAnimal[eleccionAnimal-1].costoBalanceadoPromedio}`
};

alert(`${mensajeConsumoDiario}\n${mensajeConsumoTotal}`);




