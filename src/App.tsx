import './App.css'
import Header from './components/Header'
import logo from './assets/logo.png'
import { useContext, useState } from 'react'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import Message from './components/Message'
import { TodoContext, type MessageDetails } from './store/TodoContext'

function App() {
  const { dispatch } = useContext(TodoContext)
  const [messageDetails, setMessageDetails] = useState<MessageDetails>({
    visible: false,
    message: '',
    mode: 'error',
  })

  // Create Todo Handler
  const createTodoHandler = (title: string) => {
    if (title.trim().length === 0) {
      setMessageDetails({
        visible: true,
        message: 'Input cannot be empty!',
        mode: 'error',
      })
      return
    }
    dispatch({ type: 'ADD_TODO', payload: title })
    setMessageDetails({
      visible: true,
      message: 'Todo created successfully!',
      mode: 'success',
    })
  }

  // Delete Todo Handler
  const deleteTodoHandler = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  return (
    <main className='w-[500px] h-[100dvh] portrait:w-[90%] flex flex-col'>
      <Header image={{ src: logo, alt: 'logo' }}>
        <h1>Todo List</h1>
      </Header>
      <CreateTodo onCreateTodo={createTodoHandler} />
      <TodoList onDeleteTodo={deleteTodoHandler} />
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
