'use client'

import { useEffect, useState } from 'react'

import { SubmitNomineeModal } from '@/components/modals/SubmitNomineeModal'

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <SubmitNomineeModal />
    </>
  )
}
