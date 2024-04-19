import React from "react";
import "../Styles/EmptyTodos.css";

// Define el componente EmptyTodos, que representa un mensaje cuando no hay tareas.
function EmptyTodos() {
  return (
    <p class="tooltip">
      Aun no tienes tareas
      <p class="tooltiptext">Crea Tu Primera Tarea</p>
    </p>
  );
}

// Exporta el componente EmptyTodos para que pueda ser utilizado en otros archivos.
export { EmptyTodos };
