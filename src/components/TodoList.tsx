import Todo from './Todo'
import { type TodoItem } from '../App'

type TodoListProps = {
  todos: TodoItem[]
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className='list-none'>
          <Todo isFinished={todo.isFinished}>
            <p>{todo.title}</p>
          </Todo>
        </li>
      ))}
    </ul>
  )
}
