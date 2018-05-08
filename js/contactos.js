/*
Actividad: GESTOR DE CONTACTOS
*/

//OBJETO CONTACTO

var Contacto = {
    nombre: "",
    apellido: ""
};

//Array de contactos del objeto Contacto, con datos predeterminados.
var listaContactos= [Contacto];
listaContactos.push({nombre:"Juan", apellido:"Neira"},{nombre:"Luisa", apellido:"Delgado"});

//Metodos para añadir y listar el array de conntactos
var gestionContactos = {

  // agrega un contacto nuevo
  agregar: function (contactoNuevo) {
    listaContactos.push(contactoNuevo);
    
  },

  listar: function () {
    console.log("Nombre: "+"\t\t"+"Apellido:");
    for (var i = 1; i < listaContactos.length; i++) {
      var contacto=listaContactos[i];
      console.log(contacto.nombre +"\t\t\t"+contacto.apellido);
    }
  }

}

//Declaracion de una variable que sea de tipo gestion de contactos.
var c = Object.create(gestionContactos);

//variable para guardar la opcion que elige el usuario
var opcionUsuario = 0;

//MENU
do {
  
  console.log("BIENVENIDO A LA GESTION DE CONTACTOS");
  console.log("1: Muestra la lista de contactos");
  console.log("2: Añadir un contacto nuevo");
  console.log("0: Salir");

  opcionUsuario = Number(prompt("Elige una opción:"));
  
  switch(opcionUsuario){
    case 1:
      console.log("/**************************/");
      console.log("\tLISTA DE CONTACTOS");
      c.listar();
      console.log("/**************************/");
      continue;

    case 2:
      console.log("/**************************/");
      
      var nombreNuevo = prompt("Introduce el nombre del nuevo contacto:");
      var apellidoNuevo = prompt("Introduce el apellido del nuevo contacto:");
  
      var contactoNuevo = {
        nombre: nombreNuevo,
        apellido: apellidoNuevo
      };

      c.agregar(contactoNuevo);

      console.log("INFO: Contacto Añadido:)");
      console.log("/**************************/");
      continue;

    case 0:
      console.log("/**************************/");
      console.log("HASTA PRONTO :*");
      break;
  }
  
} while (opcionUsuario!==0);