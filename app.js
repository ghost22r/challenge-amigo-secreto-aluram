// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Validar que el nombre no se repita
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    
    // Agregar el nombre a la lista
    amigos.push(nombre);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    mostrarAmigos();
    
    // Limpiar cualquier resultado anterior
    limpiarResultado();
}

// Función para mostrar la lista de amigos en el DOM
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.style.marginBottom = '5px';
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: ${amigoSorteado} 🎉</li>`;
}

// Función para limpiar el resultado
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Agregar funcionalidad para presionar Enter en el input
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Enfocar el input al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('amigo').focus();
});
