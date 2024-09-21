import { type ReactNode } from 'react'

type HeaderProps = {
  image: { src: string; alt: string }
  children: ReactNode
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header className='flex items-center justify-center gap-[30px] my-[30px]'>
      <img
        src={image.src}
        alt={image.alt}
        className='w-[50px] aspect-square '
      />
      {children}
    </header>
  )
}
