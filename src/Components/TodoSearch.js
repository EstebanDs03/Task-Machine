import React from "react";
import "../Styles/TodoSearch.css";
import { Todocontext } from "../Context/TodoContex";

// Define el componente TodoSearch, que representa un campo de búsqueda de tareas.
function TodoSearch() {
  // Extrae setSearchValue y searchValue del contexto Todocontext utilizando el hook useContext de React.
  const { setSearchValue, searchValue } = React.useContext(Todocontext);

  // Renderiza un input para realizar la búsqueda de tareas.
  return (
    <input
      placeholder="Buscar"
      className="TodoSearch"
      // Valor del input, que es controlado por el estado searchValue
      value={searchValue}
      // Función que se ejecuta cuando cambia el valor del input
      onChange={(event) => {
        // Actualiza el estado searchValue con el valor del input
        setSearchValue(event.target.value);
      }}
    />
  );
}

// Exporta el componente TodoSearch para que pueda ser utilizado en otros archivos.
export { TodoSearch };
