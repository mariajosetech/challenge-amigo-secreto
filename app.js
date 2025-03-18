
// Obtener referencias a los elementos del DOM
// Aquí estamos obteniendo el campo de entrada para los nombres de amigos, la lista donde se mostrarán los amigos y el área donde se mostrará el resultado del sorteo.
var inputAmigo = document.getElementById("amigo");
var listaAmigos = document.getElementById("listaAmigos");
var resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el valor del campo de entrada y eliminamos los espacios en blanco al inicio y al final
    var nombreAmigo = inputAmigo.value.trim();

    // Si el campo de entrada está vacío, mostramos una alerta pidiendo un nombre válido y detenemos la función
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Creamos un nuevo elemento de lista (li) y le asignamos el nombre del amigo como texto
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombreAmigo;

    // Agregamos el nuevo elemento a la lista de amigos
    listaAmigos.appendChild(nuevoItem);

    // Limpiamos el campo de entrada para que el usuario pueda ingresar otro nombre
    inputAmigo.value = "";
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Obtenemos todos los elementos de la lista de amigos
    var amigos = listaAmigos.getElementsByTagName("li");

    // Si la lista de amigos está vacía, mostramos una alerta indicando que no hay amigos para sortear y detenemos la función
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionamos un índice aleatorio dentro del rango de la lista de amigos
    var indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre del amigo sorteado utilizando el índice aleatorio
    var amigoSorteado = amigos[indiceAleatorio].textContent;

    // Mostramos el nombre del amigo sorteado en el área de resultados
    resultado.innerHTML = "<p>¡El amigo sorteado es: <strong>" + amigoSorteado + "</strong>!</p>";
}

// Añadir evento para el botón "Adicionar"
// Aquí estamos agregando un evento al botón "Adicionar" para que, cuando el usuario haga clic, se ejecute la función agregarAmigo.
document.getElementById("adicionarBtn").addEventListener("click", agregarAmigo);

// Añadir evento para el botón "Sortear Amigo"
// Aquí estamos agregando un evento al botón "Sortear Amigo" para que, cuando el usuario haga clic, se ejecute la función sortearAmigo.
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);
