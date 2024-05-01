'use client'

import React from 'react'

import { useModal } from '@/hooks/useModal'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'

export const SubmitNomineeModal: React.FC = () => {
  const { open, type, data, onClose } = useModal()

  const isOpen = open && type === 'submitNominee'

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your selected Nominees</DialogTitle>
        </DialogHeader>
        {/* <div>
          {nominees?.map((nominee) => (
            <div key={nominee}>
              <div>{nominee}</div>
            </div>
          ))}
        </div> */}
      </DialogContent>
    </Dialog>
  )
}
