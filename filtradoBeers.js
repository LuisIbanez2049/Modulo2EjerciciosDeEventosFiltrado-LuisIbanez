import {beers} from "./data.js"

console.log(beers[0].name)



// Array original de números
// const numeros = [5, 12, 8, 130, 44];

// Función de prueba para el método filter
// const esMayorQueDiez = (numero) => numero > 10;

// Usando filter para obtener un nuevo array con los números mayores que 10
// const numerosMayoresQueDiez = numeros.filter((numero) => numero > 10)

// console.log(numerosMayoresQueDiez); // [12, 130, 44]

// let arrayFiltradoPorbe = beers.filter((beer) => beer.name.includes("be") && beer.ibu > 50)

//console.log(arrayFiltradoPorbe)
const contenedorDeTabla = document.querySelector("#contenedorDeTabla")
const inputParteDelNombreCerveza = document.querySelector("#inputParteDelNombreCerveza")
const inputNumeroIbu = document.querySelector("#inputNumeroIbu")
const botonBuscar = document.querySelector("#botonBuscar")

botonBuscar.addEventListener("click", () => {
    contenedorDeTabla.innerHTML = ""
    if (!inputParteDelNombreCerveza.value || !inputNumeroIbu.value) {
        alert("Uno de los campos esta vacio")
    }
    else
    {
        let arrayFiltradoPorbe = beers.filter((beer) => beer.name.toLowerCase().includes(`${inputParteDelNombreCerveza.value.toLowerCase()}`) && beer.ibu > inputNumeroIbu.value)
        if (arrayFiltradoPorbe != "") {
            console.log(arrayFiltradoPorbe)
            crearTabla(arrayFiltradoPorbe, contenedorDeTabla)
        }
        else{
            console.log("No se encontraron resultados")
            alert("No se encontraron resultados")
        }
        
    }
})

function crearTabla(arrayDeObjetos, contenedor) {
    // Crear el elemento de la tabla
    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    tabla.className = "w-[440px] bg-[#a9aae8]"
  
    // Crear el encabezado de la tabla
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
  
    const encabezadoNombre = document.createElement("th");
    encabezadoNombre.textContent = "Nombre";
    encabezadoNombre.className = "border border-black p-2"
    
    const encabezadoId = document.createElement("th");
    encabezadoId.textContent = "IBU";
    encabezadoId.className = "border border-black p-2"
  
    filaEncabezado.appendChild(encabezadoNombre);
    filaEncabezado.appendChild(encabezadoId);
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
  
    // Crear el cuerpo de la tabla
    const cuerpo = document.createElement("tbody");
  
    arrayDeObjetos.forEach(objeto => {
      const fila = document.createElement("tr");
  
      const celdaNombre = document.createElement("td");
      celdaNombre.textContent = objeto.name;
      celdaNombre.className = "border border-black p-2"
      
      const celdaId = document.createElement("td");
      celdaId.textContent = objeto.ibu;
      celdaId.className = "border border-black p-2"

      fila.appendChild(celdaNombre);
      fila.appendChild(celdaId);
      cuerpo.appendChild(fila);
    });
  
    tabla.appendChild(cuerpo);
  
    // Añadir la tabla al documento
    contenedor.appendChild(tabla);
  }