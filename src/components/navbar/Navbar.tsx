import React from 'react'

interface NavbarProps {
  title: string
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { title } = props

  return (
    <nav className='flex justify-center items-center py-10'>
      <h1 className='text-5xl font-bold uppercase'>{title}</h1>
    </nav>
  )
}
