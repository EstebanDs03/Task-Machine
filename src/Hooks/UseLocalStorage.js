import React from "react";

// Define el hook personalizado useLocalStorage, que proporciona una forma de almacenar y recuperar datos en el almacenamiento local del navegador.
function useLocalStorage(itemName, initialValue) {
  // Define el estado local para el item, loading y error.
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Utiliza useEffect para cargar los datos del almacenamiento local y manejar errores.
  React.useEffect(() => {
    // Simula una demora de 2 segundos antes de cargar los datos.
    setTimeout(() => {
      try {
        // Intenta obtener el item del almacenamiento local.
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        // Si no hay un item en el almacenamiento local, establece el item inicial y guárdalo en el almacenamiento local.
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si hay un item en el almacenamiento local, conviértelo de JSON y establece el item.
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        // Finaliza la carga y establece loading en falso.
        setLoading(false);
      } catch (error) {
        // Si ocurre un error, finaliza la carga, establece error en verdadero y loading en falso.
        setLoading(false);
        setError(true);
      }
    }, 2000); // Tiempo de espera simulado: 2 segundos.
  });

  // Función para guardar un nuevo item en el almacenamiento local.
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  // Retorna el item, la función saveItem, el estado de loading y el estado de error.
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

// Exporta el hook personalizado useLocalStorage para que pueda ser utilizado en otros archivos.
export { useLocalStorage };
