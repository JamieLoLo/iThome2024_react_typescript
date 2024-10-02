import { useContext, useEffect } from 'react'
import { TodoContext } from '../store/TodoContext'

export default function Message() {
  const { dispatch } = useContext(TodoContext)
  const { visible, message, mode } = useContext(TodoContext).state.messageDetail

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch({ type: 'MESSAGE', payload: { visible: false } })
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [visible])
  return (
    <div
      className={`${mode === 'error' ? 'bg-red-500' : 'bg-green-500'} ${
        visible ? 'flex' : 'hidden'
      } rounded-[5px] p-[10px] fixed bottom-[20px] left-[20px]`}
    >
      <p className='text-[20px]'>{message}</p>
    </div>
  )
}
