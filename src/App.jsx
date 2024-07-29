import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return (
    <main>
      <h1>Obteniendo datos desde el API Json Placeholder</h1>
      <section>
        <ul>
          {data && data.map((user) => {
            return (<li key={user.id}>{user.name}</li>)
          })}
        </ul>
      </section>
    </main>
  )
}

export default App
