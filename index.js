import {data} from "./data/data.js";

alert('BIENVENIDOS A RICK & MORTY')

const personajeRandom =data[Math.floor(Math.random() * data.length)];
   alert (` Nombre: ${personajeRandom.name} \n Estatus: ${personajeRandom.status} \n Especie: ${personajeRandom.species} \n Genero: ${personajeRandom.gender} \n Origen: ${personajeRandom.origin.name} \n Ubicacion ${personajeRandom.location.name} `);

data.sort((a, b) => b.name > a.name);
   const primero = data[0]
   alert (` Nombre: ${primero.name} \n Estatus: ${primero.status} \n Especie: ${primero.species} \n Genero: ${primero.gender} \n Origen: ${primero.origin.name} \n Ubicacion ${primero.location.name} `);

const nombres = data.map(data => data.name);

do {
   
   let listaNombres = "Elija un personaje: \n";
   
   for (let i = 0; i < data.length; i++) {
   let n= i+1;   
   listaNombres += n + '-' + data[i].name + "\n";
   }

   let eleccion = parseInt(prompt(listaNombres));
   
   const encontrar = data.find(personaje => personaje.id === eleccion);

   if (encontrar) {
      alert(` Nombre: ${encontrar.name} \n Estatus: ${encontrar.status} \n Especie: ${encontrar.species} \n Genero: ${encontrar.gender} \n Origen: ${encontrar.origin.name} \n Ubicacion ${encontrar.location.name} `);
    } else {
      const reintentar = confirm("NO EXISTE, intentar de nuevo?");
      if (!reintentar) {
        alert("Muchas gracias por visitar nuestra web!!!");
        break;
      }
    }
} while (true);
 
  