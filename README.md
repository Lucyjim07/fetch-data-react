# Hacer fetch de datos desde un API

## Crear el proyecto con Vite
Por facilidad se crea un proyecto con la herramienta de generación vite con el siguiente comando y se siguen las instrucciones
``` bash
$ npm create vite@latest
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