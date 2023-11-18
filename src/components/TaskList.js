import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {/* Mapeo de las tareas y renderización de componentes TaskItem */}
          {tasks.map(task => (
            <TaskItem
              key={task.id}                   // Propiedad clave única para identificar elementos en la lista
              task={task}                     // Propiedad que pasa la tarea al componente TaskItem
              onTaskComplete={onTaskComplete} // Función para manejar la tarea completada
              onTaskDelete={onTaskDelete}     // Función para manejar la eliminación de la tarea
            />
          ))}
        </ul>
      </div>
    );
  };

export default TaskList;