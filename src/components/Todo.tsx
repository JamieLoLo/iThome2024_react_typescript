import { FC } from 'react'

type TodoProps = { isFinished: boolean }

const Todo: FC<TodoProps> = ({ isFinished }) => {
  return (
    <div className='flex items-center gap-[20px]'>
      <input type='checkbox' checked={isFinished} />

      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default Todo
