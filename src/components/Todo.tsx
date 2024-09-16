import { type ReactNode, type PropsWithChildren } from 'react'

// interface TodoProps {
//   isFinished: boolean
//   children: ReactNode
// }

type TodoProps = PropsWithChildren<{ isFinished: boolean }>

export default function Todo({ isFinished, children }: TodoProps) {
  return (
    <div className='flex items-center gap-[20px]'>
      <input type='checkbox' checked={isFinished} />
      {children}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
