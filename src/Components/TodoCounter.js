import React from "react";
import "../Styles/TodoCounter.css";
import { Todocontext } from "../Context/TodoContex";

// Define el componente TodoCounter, que muestra el número de tareas completadas y el total de tareas.
function TodoCounter() {
  // Extrae los valores de completedTodos y totalTodos del contexto Todocontext usando el hook useContext de React.
  const { completedTodos, totalTodos } = React.useContext(Todocontext);

  // Renderiza el contador de tareas.
  return (
    <h1 className="TodoCounter">
      {/* Muestra el número de tareas completadas */}
      Has Completado <span>{completedTodos}</span> De
      {/* Muestra el total de tareas */}
      <span> {totalTodos}</span> Tareas
    </h1>
  );
}

// Exporta el componente TodoCounter para que pueda ser utilizado en otros archivos.
export { TodoCounter };
