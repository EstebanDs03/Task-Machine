// Importa el módulo React, necesario para definir componentes en React.
import React from "react";

// Importa el componente AppUI desde el archivo AppUI.js en la misma carpeta.
import { AppUI } from "./AppUI";

// Importa el componente TodoProvider desde el archivo TodoContex.js en la carpeta Context.
// Este componente proporciona el contexto para la gestión de tareas (todos).
import { TodoProvider } from "./Context/TodoContex";

// Componente principal de la aplicación.
function App() {
  // Retorna el componente TodoProvider que envuelve el componente AppUI.
  // Esto asegura que todos los componentes dentro de AppUI tengan acceso al contexto de las tareas.
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos de la aplicación.
export default App;
