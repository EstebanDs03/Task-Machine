// Importa las bibliotecas necesarias de React y ReactDOM.
import React from "react";
import ReactDOM from "react-dom";

// Importa el archivo de estilos principal de la aplicación.
import "./Styles/index.css";

// Importa el componente principal de la aplicación.
import App from "./App";

// Crea un nuevo contenedor de raíz utilizando el método createRoot de ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza el componente App dentro del contenedor de raíz.
root.render(<App />);
