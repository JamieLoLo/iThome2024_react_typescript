import { type SetStateAction, useEffect } from 'react'
import { type MessageDetails } from '../App'

type MessageProps = MessageDetails & {
  onMessageVisible: (value: SetStateAction<MessageDetails>) => void
}

export default function Message({
  visible,
  message,
  mode,
  onMessageVisible,
}: MessageProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onMessageVisible((prev: MessageDetails) => ({
          ...prev,
          visible: false,
        }))
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
