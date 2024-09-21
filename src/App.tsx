import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import logo from './assets/logo.png'
import { useState } from 'react'

type Todo = {
  id: number
  title: string
  isFinished: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodoHandler = () => {
    const newTodo: Todo = {
      id: Math.random(),
      title: 'Learn JavaScript',
      isFinished: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  return (
    <main className='w-[500px] h-[100dvh] portrait:w-[90%] flex flex-col'>
      <Header image={{ src: logo, alt: 'logo' }}>
        <h1>Todo List</h1>
      </Header>
      <div className='w-full mb-[20px] h-fit flex'>
        <label htmlFor='newTodo'></label>
        <input
          type='text'
          id='newTodo'
          name='newTodo'
          className='flex-1 mr-[16px] px-3 rounded-[5px] focus:outline-none'
        />
        <button onClick={createTodoHandler}>Create</button>
      </div>
      {todos.map((todo) => (
        <li key={todo.id} className='list-none'>
          <Todo isFinished={todo.isFinished}>
            <p>{todo.title}</p>
          </Todo>
        </li>
      ))}
    </main>
  )
}

export default App
