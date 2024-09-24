import './App.css'
import Header from './components/Header'
import logo from './assets/logo.png'
import { useState } from 'react'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

export type TodoItem = {
  id: number
  title: string
  isFinished: boolean
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  const createTodoHandler = (title: string) => {
    const newTodo: TodoItem = {
      id: Math.random(),
      title: title,
      isFinished: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <main className='w-[500px] h-[100dvh] portrait:w-[90%] flex flex-col'>
      <Header image={{ src: logo, alt: 'logo' }}>
        <h1>Todo List</h1>
      </Header>
      <CreateTodo onCreateTodo={createTodoHandler} />
      <TodoList todos={todos} onDeleteTodo={deleteTodoHandler} />
    </main>
  )
}

export default App
