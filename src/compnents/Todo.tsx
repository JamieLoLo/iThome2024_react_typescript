export default function Todo({
  content,
  isFinished,
}: {
  content: string
  isFinished: boolean
}) {
  return (
    <div className='flex items-center gap-[20px]'>
      <input type='checkbox' checked={isFinished} />
      <p>{content}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
