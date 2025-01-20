var amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el nombre del input
    var amigo = document.getElementById("amigo").value;

    // Verificamos si el nombre no está vacío
    if (amigo !== "") {
        // Agregamos el nombre al array
        amigos.push(amigo);

        // Limpiamos el campo de texto
        document.getElementById("amigo").value = "";

        // Mostramos la lista actualizada
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para mostrar la lista de amigos en el HTML
function mostrarLista() {
    // Obtenemos el elemento de la lista en el HTML
    var lista = document.getElementById("listaAmigos");

    // Limpiamos la lista antes de mostrar los nuevos amigos
    lista.innerHTML = "";

    // Recorremos todos los amigos y los agregamos a la lista
    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificamos si hay amigos en la lista
    if (amigos.length > 0) {
        // Elegimos un amigo al azar (usamos el primer número de la lista)
        var indice = Math.floor(Math.random() * amigos.length);

        // Mostramos el resultado en el HTML
        var resultado = document.getElementById("resultado");
        resultado.textContent = "Tu amigo secreto es: " + amigos[indice];
    } else {
        alert("Primero agrega algunos amigos.");
    }
}