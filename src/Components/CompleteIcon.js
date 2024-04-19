// Importa React y el componente TodoIcon desde el archivo TodoIcons.js
import React from "react";
import { TodoIcon } from "./TodoIcons.js";

// Define el componente CompleteIcon, que representa un icono de completado para una tarea.
function CompleteIcon({ completed, onComplete }) {
  // Retorna el componente TodoIcon con ciertas propiedades:
  return (
    <TodoIcon
      type="check" // Establece el tipo de icono como "check"
      color={completed ? "green" : "gray"} // Establece el color del icono según si la tarea está completada o no
      onClick={onComplete} // Asigna la función onComplete como el manejador de eventos onClick
    />
  );
}

// Exporta el componente CompleteIcon para que pueda ser utilizado en otros archivos.
export { CompleteIcon };
