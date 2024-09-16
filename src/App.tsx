import './App.css'
import Todo from './components/Todo'

function App() {
  return (
    <main>
      <Todo isFinished={false}>
        <p>Learn typeScript</p>
      </Todo>
    </main>
  )
}

export default App
