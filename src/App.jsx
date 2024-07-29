import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users")

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
