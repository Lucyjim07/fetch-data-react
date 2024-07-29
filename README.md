# Hacer fetch de datos desde un API
Este proyecto se realizó siguiendo [este](https://www.youtube.com/watch?v=6u1RHUoXIPI) tutorial de Youtube 

## Crear el proyecto con Vite
Por facilidad se crea un proyecto con la herramienta de generación vite con el siguiente comando y se siguen las instrucciones
``` bash
$ npm create vite@latest
```

Se ingresa a la carpeta del proyecto, se instalan las dependencias y se ejecuta la aplicación
``` bash
$ cd nombre-proyecto
$ npm install
$ npm run dev
```

## Obtener datos desde una API
Para este propósito se va a usar el API de https://jsonplaceholder.typicode.com/ y se seguirán los siguientes pasos

1. Limpiar el proyecto base y prepararlo para iniciar el fetch de datos
2. Para guardar los datos provenientes del API se va a usar un estado de react de la siguiente forma
``` js
const [data, setData] = useState(null)
```
3. Para obtener los datos desde el API se usa el método `fetch` dentro de un efecto de react
``` js
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setData(data));
  }, [])
```
4. Finalmente se muestra en pantalla los resultados de la consulta a la API
``` jsx
    <ul>
        {data && data.map((user) => {
        return (<li key={user.id}>{user.name}</li>)
        })}
    </ul>
```
5. Convertir el proceso en un custom hook. Los hooks siguen la nomenclatura `useFuncionalidad` por lo que se creará un archivo llamado `useFetch` en la carpeta `hooks` para pasar la funcionalidad al nuevo archivo
`hooks/useFetch.jsx`
``` jsx
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
```