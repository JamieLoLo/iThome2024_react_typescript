import './App.css'
import Header from './components/Header'
import logo from './assets/logo.png'
import { useState } from 'react'
import TodoList from './components/TodoList'

export type TodoItem = {
  id: number
  title: string
  isFinished: boolean
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  const createTodoHandler = () => {
    const newTodo: TodoItem = {
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
      <TodoList todos={todos} />
    </main>
  )
}

export default App
