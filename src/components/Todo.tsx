import { type PropsWithChildren } from 'react'

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
  return (
    <div className='flex items-center gap-[20px] justify-between mb-3'>
      <input type='checkbox' checked={isFinished} />
      {children}
      <div className='flex gap-[16px]'>
        <button>Edit</button>
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
