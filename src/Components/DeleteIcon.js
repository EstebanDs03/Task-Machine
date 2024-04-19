import React from "react";
import { TodoIcon } from "./TodoIcons.js";

// Define el componente DeleteIcon, que representa un icono de eliminar tarea.
function DeleteIcon({ onDelete }) {
  // Retorna el componente TodoIcon con ciertas propiedades:
  return (
    // Establece el tipo de icono como "delete"
    <TodoIcon
      type="delete"
      color="gray"
      // Asigna la función onDelete como el manejador de eventos onClick
      onClick={onDelete}
    />
  );
}

// Exporta el componente DeleteIcon para que pueda ser utilizado en otros archivos.
export { DeleteIcon };
