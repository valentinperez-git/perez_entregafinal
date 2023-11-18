import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  // Estado para gestionar el valor de entrada para el nombre de la tarea
  const [taskName, setTaskName] = useState('');

  // Manejador de eventos para el cambio en la entrada
  const handleInputChange = event => {
    // Actualiza el estado taskName con el valor de la entrada
    setTaskName(event.target.value);
  };

  // Manejador de eventos para la presentación del formulario
  const handleFormSubmit = event => {
    // Evita el comportamiento predeterminado de envío del formulario
    event.preventDefault();

    // Verifica si taskName no está vacío ni contiene solo espacios en blanco
    if (taskName.trim() !== '') {
      // Llama a la función onTaskAdd pasada como prop con taskName
      onTaskAdd(taskName);

      // Limpia el campo de entrada restableciendo el estado de taskName
      setTaskName('');
    }
  };

  // Renderiza el componente TaskForm
  return (
    <div>
      {/* Muestra un encabezado para el formulario de tarea */}
      <h2>Agregar Tarea</h2>

      {/* Formulario de tarea con campo de entrada y botón de envío */}
      <form onSubmit={handleFormSubmit}>
        {/* Campo de entrada para el nombre de la tarea con control de valor y manejadores de cambio */}
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={handleInputChange}
        />

        {/* Botón de envío para agregar la tarea */}
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

// Exporta el componente TaskForm como la exportación predeterminada
export default TaskForm;
