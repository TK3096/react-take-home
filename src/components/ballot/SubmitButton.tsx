'use client'

import React from 'react'

import { useSelectNominee } from '@/hooks/useSelectNominee'
import { useModal } from '@/hooks/useModal'

import { Button } from '@/components/ui/button'

export const SubmitButton: React.FC = () => {
  const { selected } = useSelectNominee()
  const { onOpen } = useModal()

  return (
    <Button
      className='w-full'
      variant='primary'
      disabled={!selected}
      onClick={() => onOpen('submitNominee', { selected })}
    >
      Submit Ballot
    </Button>
  )
}
