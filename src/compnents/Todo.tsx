export default function Todo(props) {
  return (
    <div className='flex items-center gap-[20px]'>
      <input type='checkbox' checked={false} />
      <p>Content</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
