import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'
import { TodoContext } from '../store/TodoContext'

type TodoProps = PropsWithChildren<{
  isFinished: boolean
  id: number
  onDelete: (id: number) => void
}>

export default function Todo({
  isFinished,
  children,
  id,
  onDelete,
}: TodoProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(children)
  const { dispatch } = useContext(TodoContext)

  // 切換編輯模式
  const toggleEditHandler = () => {
    setIsEditing((prev) => !prev)
  }

  // 處理標題變更
  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value)
  }

  // 提交新的標題
  const submitNewTitle = () => {
    // 如果標題是空的，則不更新
    if (typeof newTitle === 'string' && newTitle.trim().length === 0) {
      setNewTitle(children)
      setIsEditing(false)
      return
    }
    if (typeof newTitle === 'string' && newTitle.trim().length > 0) {
      dispatch({
        type: 'EDIT_TODO_TITLE',
        payload: { id, title: newTitle },
      })
    }
  }

  // 處理勾選
  const checkboxHandler = () => {
    dispatch({
      type: 'TOGGLE_TODO_ISFINISHED',
      payload: id,
    })
  }

  useEffect(() => {
    if (!isEditing) {
      submitNewTitle()
    }
  }, [isEditing])

  return (
    <div className='flex items-center gap-[20px] justify-between mb-3'>
      <input type='checkbox' onChange={checkboxHandler} checked={isFinished} />
      {isEditing ? (
        <input
          type='text'
          value={typeof newTitle === 'string' ? newTitle : ''}
          className='px-2 py-1'
          onChange={changeTitleHandler}
        />
      ) : (
        children
      )}
      <div className='flex gap-[16px]'>
        <button onClick={toggleEditHandler}>
          {isEditing ? 'Confirm' : 'Edit'}
        </button>
        <button
          onClick={() => {
            onDelete(id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
