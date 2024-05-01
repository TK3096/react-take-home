'use client'

import React from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { cn } from '@/lib/utils'

interface NomineeCardProps {
  id: string
  categoryId: string
  category: string
  title: string
  photoUrl: string
  onClick: (
    categoryId: string,
    data: { id: string; title: string; category: string },
  ) => void
  active?: boolean
}

export const NomineeCard: React.FC<NomineeCardProps> = (
  props: NomineeCardProps,
) => {
  const { title, photoUrl, id, categoryId, active, onClick, category } = props

  return (
    <Card
      className={cn(
        'transition-colors duration-200 border-none drop-shadow-xl h-full flex flex-col justify-between',
        active
          ? 'bg-[#009B86] hover:bg-[#009B86] hover:text-white'
          : 'bg-blue-500/30 hover:bg-blue-500/10 hover:text-[#ccc]',
      )}
    >
      <CardHeader>
        <h4 className='text-center font-semibold text-lg'>{title}</h4>
      </CardHeader>
      <CardContent className='flex justify-center items-center'>
        <Avatar className='w-20 h-20'>
          <AvatarImage src={photoUrl} alt={title} />
          <AvatarFallback className='bg-indigo-500/40'></AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full uppercase font-semibold'
          variant='primary'
          onClick={() => onClick(categoryId, { id, category, title })}
        >
          {active ? 'Selected' : 'Select'}
        </Button>
      </CardFooter>
    </Card>
  )
}
