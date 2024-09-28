import Todo from './Todo'
import { type TodoItem } from '../store/TodoContext'

type TodoListProps = {
  todos: TodoItem[]
  onDeleteTodo: (id: number) => void
}

export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
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
