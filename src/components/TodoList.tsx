import Todo from './Todo'
import { TodoContext } from '../store/TodoContext'
import { useContext } from 'react'

type TodoListProps = {
  onDeleteTodo: (id: number) => void
}

export default function TodoList({ onDeleteTodo }: TodoListProps) {
  const { todos } = useContext(TodoContext).state
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className='list-none'>
          <Todo
            isFinished={todo.isFinished}
            id={todo.id}
            onDelete={onDeleteTodo}
          >
            <p>{todo.title}</p>
          </Todo>
        </li>
      ))}
    </ul>
  )
}
