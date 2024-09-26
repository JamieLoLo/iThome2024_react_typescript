import './App.css'
import Header from './components/Header'
import logo from './assets/logo.png'
import { useState } from 'react'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import Message from './components/Message'

export type TodoItem = {
  id: number
  title: string
  isFinished: boolean
}

export type MessageDetails = {
  visible: boolean
  message: string
  mode: 'error' | 'success'
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [messageDetails, setMessageDetails] = useState<MessageDetails>({
    visible: false,
    message: '',
    mode: 'error',
  })

  const createTodoHandler = (title: string) => {
    if (title.trim().length === 0) {
      setMessageDetails({
        visible: true,
        message: 'Input cannot be empty!',
        mode: 'error',
      })
      return
    }
    const newTodo: TodoItem = {
      id: Math.random(),
      title: title,
      isFinished: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setMessageDetails({
      visible: true,
      message: 'Todo created successfully!',
      mode: 'success',
    })
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
      <Message
        visible={messageDetails.visible}
        mode={messageDetails.mode}
        message={messageDetails.message}
        onMessageVisible={setMessageDetails}
      />
    </main>
  )
}

export default App
