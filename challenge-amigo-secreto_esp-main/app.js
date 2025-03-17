let participantes = []; // Vector para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    participantes.push(nombre);
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    
    input.value = ""; // Limpiar el campo de texto
    input.focus(); // Volver a enfocar el input
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Agrega al menos un participante antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    let nombreSeleccionado = participantes[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSeleccionado}</strong></li>`;
}

function reiniciarJuego() {
    location.reload();
}
