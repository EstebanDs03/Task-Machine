// Importa los componentes necesarios de otros archivos del proyecto.
import React from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { EmptyTodos } from "./Components/EmptyTodos";
import { TodosError } from "./Components/TodosError";
import { TodosLoading } from "./Components/TodosLoading";
import { Todocontext } from "./Context/TodoContex";
import { Modal } from "./Components/Modal";
import { TodoForm } from "./Components/TodoForm";

// Definición del componente AppUI.
function AppUI() {
  // Extrae los valores necesarios del contexto Todocontext usando el hook useContext de React.
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(Todocontext);

  // Renderiza los elementos de la interfaz de usuario.
  return (
    <>
      {/* Componente para contar el número de tareas */}
      <TodoCounter />
      {/* Componente para buscar tareas */}
      <TodoSearch />

      {/* Lista de tareas */}
      <TodoList>
        {/* Renderiza indicadores de carga si loading es true */}
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {/* Renderiza el componente de error si error es true */}
        {error && <TodosError />}
        {/* Renderiza un mensaje si no hay tareas y no está cargando */}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {/* Renderiza cada tarea */}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* Botón para crear una nueva tarea */}
      <CreateTodoButton setOpenModal={setOpenModal} />

      {/* Renderiza el modal si openModal es true */}
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

// Exporta el componente AppUI para que pueda ser utilizado en otros archivos.
export { AppUI };
