import './App.css'
import Todo from './compnents/Todo'

function App() {
  return (
    <main>
      <Todo content='Learn typeScript' isFinished={false} />
    </main>
  )
}

export default App
