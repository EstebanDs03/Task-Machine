import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Modal.css';

// Define el componente Modal, que representa un modal en la interfaz de usuario.
function Modal({ children }) {
  // Utiliza ReactDOM.createPortal para renderizar el contenido del modal fuera de la jerarquía del DOM de React.
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    // El modal se renderiza dentro del elemento con el ID "modal" en el DOM.
    document.getElementById('modal')
  );
}

// Exporta el componente Modal para que pueda ser utilizado en otros archivos.
export { Modal };
