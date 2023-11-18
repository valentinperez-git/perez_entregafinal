import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  // Manejar si la tarea está completada o no
  const [completed, setCompleted] = useState(false);

  // Marcar/desmarcar la tarea como completada
  const handleComplete = () => {
    
    setCompleted(!completed);   // Cambia el estado de completado a su opuesto actual

    // Llama a función para manejar tarea completada
    onTaskComplete(task.id);
  };

  // Elimina la tarea
  const handleDelete = () => {
    // Llama a la función para manejar eliminación de tarea
    onTaskDelete(task.id);
  };

  return (
    // Elemento de lista (li) con estilo condicional basado en si la tarea está completada o no
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {/* Nombre de la tarea */}
      {task.name}

      {/* Botón para completar/descompletar la tarea */}
      <button onClick={handleComplete}>
        {completed ? 'Descompletar' : 'Completar'}
      </button>

      {/* Botón para eliminar la tarea */}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
