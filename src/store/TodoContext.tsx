import { createContext, Dispatch, ReactNode, useReducer } from 'react'

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

//  定義 actions
type ActionType =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'EDIT_TODO_TITLE'; payload: { id: number; title: string } }
  | { type: 'TOGGLE_TODO_ISFINISHED'; payload: number }

// 定義狀態
type StateType = {
  todos: TodoItem[]
}

// 初始狀態
const initialState: StateType = {
  todos: [],
}

// reducer
const todoReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: TodoItem = {
        id: Math.random(),
        title: action.payload,
        isFinished: false,
      }
      return { ...state, todos: [...state.todos, newTodo] }
    }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case 'EDIT_TODO_TITLE':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      }
    case 'TOGGLE_TODO_ISFINISHED':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isFinished: !todo.isFinished }
            : todo
        ),
      }
    default:
      return state
  }
}

// 創建 Context
export const TodoContext = createContext<{
  state: StateType
  dispatch: Dispatch<ActionType>
}>({
  state: initialState,
  dispatch: () => null,
})

// Provider
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
