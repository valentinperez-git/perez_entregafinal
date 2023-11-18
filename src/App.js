import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  // Estado para gestionar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Manejador para agregar una nueva tarea
  const handleTaskAdd = taskName => {
    // Crea una nueva tarea con un id único y el nombre proporcionado
    const newTask = { id: tasks.length + 1, name: taskName };
    
    // Actualiza el estado de las tareas agregando la nueva tarea
    setTasks([...tasks, newTask]);
  };

  // Manejador para marcar una tarea como completada o no completada
  const handleTaskComplete = taskId => {
    // Actualiza el estado de las tareas modificando la tarea correspondiente
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Manejador para eliminar una tarea
  const handleTaskDelete = taskId => {
    // Actualiza el estado de las tareas eliminando la tarea correspondiente
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Renderiza el componente App
  return (
    <div>
      {/* Encabezado de la aplicación */}
      <h1>Aplicación de Lista de Tareas</h1>

      {/* Componente TaskForm para agregar nuevas tareas */}
      <TaskForm onTaskAdd={handleTaskAdd} />

      {/* Componente TaskList para mostrar y gestionar la lista de tareas */}
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

// Exporta el componente App como la exportación predeterminada
export default App;
