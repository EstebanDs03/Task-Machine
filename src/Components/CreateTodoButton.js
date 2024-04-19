import React from "react";
import "../Styles/CreateTodoButton.css";

// Define el componente CreateTodoButton, que representa un botón para crear una nueva tarea.
function CreateTodoButton({ setOpenModal }) {
  return (
    // Botón para crear una nueva tarea
    <button
      className="CreateTodoButton"
      onClick={() => {
        // Al hacer clic en el botón, se cambia el estado de setOpenModal para abrir o cerrar el modal.
        setOpenModal((state) => !state);
      }}
    >
      <div class="sign"> + </div>
      <div class="text"> Crear </div>
    </button>
  );
}

// Exporta el componente CreateTodoButton para que pueda ser utilizado en otros archivos.
export { CreateTodoButton };
