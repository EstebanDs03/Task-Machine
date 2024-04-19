import React from "react";
import { useLocalStorage } from "../Hooks/UseLocalStorage";

// Crea un contexto para manejar el estado y las funciones relacionadas con las tareas.
const Todocontext = React.createContext();

// Define el proveedor TodoProvider, que provee el contexto y gestiona el estado de las tareas.
function TodoProvider({ children }) {
  // Utiliza el hook useLocalStorage para obtener y guardar las tareas en el almacenamiento local del navegador.
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  
  // Define el estado local para el valor de búsqueda y el estado del modal.
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  // Calcula el número de tareas completadas y el total de tareas.
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filtra las tareas según el valor de búsqueda.
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // Función para agregar una nueva tarea.
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  // Función para marcar una tarea como completada.
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Función para eliminar una tarea.
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // Proporciona el contexto con los valores y funciones necesarios a los componentes hijos.
  return (
    <Todocontext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        setOpenModal,
        openModal,
        addTodo
      }}
    >
      {children}
    </Todocontext.Provider>
  );
}

// Exporta el proveedor TodoProvider y el contexto Todocontext para que puedan ser utilizados en otros archivos.
export { TodoProvider, Todocontext };
