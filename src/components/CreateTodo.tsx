import { useRef, type FormEvent } from 'react'

type CreateTodoProps = {
  onCreateTodo: (title: string) => void
}

export default function CreateTodo({ onCreateTodo }: CreateTodoProps) {
  const newTodo = useRef<HTMLInputElement>(null)

  const createTodoHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    const enteredTodo = newTodo.current!.value
    onCreateTodo(enteredTodo)
    event.currentTarget.reset()
  }

  return (
    <form className='w-full mb-[20px] h-fit flex' onSubmit={createTodoHandler}>
      <label htmlFor='newTodo'></label>
      <input
        ref={newTodo}
        type='text'
        id='newTodo'
        name='newTodo'
        className='flex-1 mr-[16px] px-3 rounded-[5px] focus:outline-none'
      />
      <button>Create</button>
    </form>
  )
}
