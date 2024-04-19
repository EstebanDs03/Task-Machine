import { ReactComponent as CheckSVG } from "../svg/CompleteIcon.svg";
import { ReactComponent as DeleteSVG } from "../svg/DeleteIcon.svg";
import "../Styles/TodoIcons.css";

// Define un objeto que mapea tipos de iconos a funciones que retornan los SVG correspondientes.
const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

// Define el componente TodoIcon, que representa un icono para una tarea.
function TodoIcon({ type, color, onClick }) {
  // Retorna un contenedor span que envuelve el SVG del icono.
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

// Exporta el componente TodoIcon para que pueda ser utilizado en otros archivos.
export { TodoIcon };
