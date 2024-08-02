// Añadir un evento de clic al botón "Agregar nota"
document.getElementById('agregar-nota').addEventListener('click', () => {
    const notasContainer = document.getElementById('notas-container');

    // Crear un nuevo contenedor para la nota
    const notaDiv = document.createElement('div');
    notaDiv.classList.add('nota');

    // Crear una nueva etiqueta para la nota
    const label = document.createElement('label');
    label.textContent = `Nota ${notasContainer.children.length + 1}`;
    notaDiv.appendChild(label);

    // Crear un nuevo campo de entrada para la nota
    const notaInput = document.createElement('input');
    notaInput.type = 'number';
    notaInput.classList.add('nota-input');
    notaDiv.appendChild(notaInput);

    // Crear un nuevo campo de entrada para la ponderación
    const ponderacionInput = document.createElement('input');
    ponderacionInput.type = 'number';
    ponderacionInput.classList.add('ponderacion-input');
    ponderacionInput.placeholder = '%';
    ponderacionInput.min = '0';
    ponderacionInput.max = '100';
    notaDiv.appendChild(ponderacionInput);

    // Crear un botón para eliminar la nota
    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.classList.add('eliminar-nota');
    eliminarButton.addEventListener('click', () => {
        notaDiv.remove(); // Eliminar el contenedor de la nota
        actualizarResultados(); // Actualizar el resultado final después de eliminar una nota
    });
    notaDiv.appendChild(eliminarButton);

    // Añadir el nuevo contenedor de nota al contenedor principal
    notasContainer.appendChild(notaDiv);

    // Actualizar el resultado final después de agregar una nueva nota
    actualizarResultados();
});

// Añadir un evento de clic al botón "Calcular"
document.getElementById('calcular').addEventListener('click', () => {
    actualizarResultados();
});

// Función para actualizar los resultados del promedio
function actualizarResultados() {
    const notas = document.querySelectorAll('.nota-input');
    const ponderaciones = document.querySelectorAll('.ponderacion-input');
    let sumaNotas = 0;
    let sumaPonderaciones = 0;

    // Calcular la suma de las notas ponderadas
    notas.forEach((nota, index) => {
        const ponderacion = ponderaciones[index].value / 100;
        sumaNotas += nota.value * ponderacion;
        sumaPonderaciones += parseFloat(ponderaciones[index].value);
    });

    // Mostrar el resultado basado en la ponderación total
    const resultadoDiv = document.getElementById('resultado');
    const mensajeP = document.getElementById('mensaje');
    const promedioFinalP = document.getElementById('promedio-final');

    if (sumaPonderaciones < 100) {
        mensajeP.textContent = `Necesitas una nota para completar el curso.`;
        promedioFinalP.textContent = '';
    } else {
        mensajeP.textContent = 'Tu nota final es:';
        promedioFinalP.textContent = sumaNotas.toFixed(2);
    }

    resultadoDiv.style.display = 'block'; // Mostrar el contenedor de resultados
}
