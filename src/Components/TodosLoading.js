import React from "react";
import "../Styles/TodosLoading.css";

// Define el componente TodosLoading, que representa una animación de carga para la lista de tareas.
function TodosLoading() {
  return (
    // Renderiza un contenedor con la clase "LoadingTodo-container" para la animación de carga.
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

// Exporta el componente TodosLoading para que pueda ser utilizado en otros archivos.
export { TodosLoading };
