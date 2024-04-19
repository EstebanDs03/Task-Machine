// Importa los componentes CompleteIcon y DeleteIcon desde los archivos correspondientes.
import { CompleteIcon } from "./CompleteIcon.js";
import { DeleteIcon } from "./DeleteIcon.js";
// Importa los estilos para el componente TodoItem.
import "../Styles/TodoItem.css";

// Define el componente TodoItem, que representa un elemento de la lista de tareas.
function TodoItem(props) {
  return (
    // Elemento de lista con la clase "TodoItem"
    <li className="TodoItem">
      {/* Icono para marcar la tarea como completada */}
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      {/* Texto de la tarea, con una clase adicional si la tarea está completada */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* Icono para eliminar la tarea */}
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

// Exporta el componente TodoItem para que pueda ser utilizado en otros archivos.
export { TodoItem };
