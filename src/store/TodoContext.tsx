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

// 定義 actions
type ActionType =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: number }
