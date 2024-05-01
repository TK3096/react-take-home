import { Selected } from '@/types'

import { create } from 'zustand'

export type ModalType = 'submitNominee'

interface ModalData {
  selected?: Selected | null
}

interface ModalStore {
  open: boolean
  type: ModalType | null
  data: ModalData | null
  onOpen: (type: ModalType, data?: ModalData) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  open: false,
  onOpen: (type, data) => set({ open: true, type, data }),
  onClose: () => set({ open: false, type: null, data: null }),
}))
