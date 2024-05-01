'use client'

import React from 'react'

import { useModal } from '@/hooks/useModal'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'

import { cn } from '@/lib/utils'

export const SubmitNomineeModal: React.FC = () => {
  const { open, type, data, onClose } = useModal()

  const isOpen = open && type === 'submitNominee'
  const selected = data?.selected
  const selectedLength = selected ? Object.values(selected).length : 0

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <h2 className='text-center text-xl'>Your selected Nominees</h2>
          </DialogTitle>
        </DialogHeader>
        <div className='space-y-4 mt-4 bg-emerald-500/40 px-3 py-4 rounded-md'>
          {selected &&
            Object.values(selected).map((s, i) => (
              <div
                key={s.id}
                className={cn(
                  'grid grid-cols-[30%_1fr] gap-2 text-lg',
                  i === selectedLength - 1
                    ? ''
                    : 'border-b border-emerald-500/50 pb-4',
                )}
              >
                <p className='font-bold'>{s.category}</p>
                <p>{s.title}</p>
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
