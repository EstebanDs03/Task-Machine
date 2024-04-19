// Importa los componentes necesarios de otros archivos del proyecto.
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./Context/TodoContex";
// Componente principal de la aplicación.
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
