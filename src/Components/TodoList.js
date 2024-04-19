// Importa los estilos para el componente TodoList.
import "../Styles/TodoList.css";

// Define el componente TodoList, que representa una lista de tareas.
function TodoList({ children }) {
  return (
    // Renderiza un elemento de lista <ul> con la clase "TodoList".
    <ul className="TodoList">
      {/* Renderiza los componentes hijos que se pasan como children */}
      {children}
    </ul>
  );
};

// Exporta el componente TodoList para que pueda ser utilizado en otros archivos.
export { TodoList };
