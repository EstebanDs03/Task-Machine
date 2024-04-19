import React from "react";
import "../Styles/TodoForm.css";
import { Todocontext } from "../Context/TodoContex";

// Define el componente TodoForm, que representa el formulario para agregar una nueva tarea.
function TodoForm() {
  // Extrae las funciones setOpenModal y addTodo del contexto Todocontext usando el hook useContext de React.
  const { setOpenModal, addTodo } = React.useContext(Todocontext);
  // Define el estado local newTodoValue para almacenar el valor del nuevo TODO.
  const [newTodoValue, setNewTodoValue] = React.useState("");

  // Función que se ejecuta cuando se envía el formulario.
  const onSubmit = (event) => {
    // Agrega el nuevo TODO utilizando la función addTodo del contexto.
    addTodo(newTodoValue);
    // Evita que se recargue la página al enviar el formulario.
    event.preventDefault();
    // Cierra el modal después de agregar el TODO.
    setOpenModal(false);
  };

  // Función que se ejecuta cuando se cancela la creación de un TODO.
  const onCancel = (event) => {
    // Cierra el modal sin agregar el TODO.
    setOpenModal(false);
  };

  // Función que se ejecuta cuando cambia el valor del input del formulario.
  const onChange = (event) => {
    // Actualiza el estado local newTodoValue con el valor del input.
    setNewTodoValue(event.target.value);
  };

  // Renderiza el formulario para agregar un nuevo TODO.
  return (
    <form onSubmit={onSubmit} id="form">
      <div id="form-body">
        <div id="welcome-lines">
          <p id="welcome-line-1">Task Machine</p>
          <p id="welcome-line-2">AGREGA UNA TAREA</p>
        </div>
      </div>
      <div id="input-area">
        <div class="form-inp">
          <input
            placeholder="Nuevo tarea"
            type="text"
            value={newTodoValue}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div id="submit-button-cvr">
        <button id="submit-button" type="submit">
          CREAR
        </button>
        <div id="cancel-button-cvr">
          <button id="cancel-button" type="" onClick={onCancel}>
            CANCELAR
          </button>
        </div>
      </div>
    </form>
  );
}

// Exporta el componente TodoForm para que pueda ser utilizado en otros archivos.
export { TodoForm };
