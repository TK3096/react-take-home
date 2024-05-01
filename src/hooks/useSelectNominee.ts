import { Selected } from '@/types'

import { create } from 'zustand'

interface SelectNomineeStore {
  selected: Selected | null
  onSelect: (categoryId: string, nomineeId: string) => void
}

export const useSelectNominee = create<SelectNomineeStore>((set) => ({
  selected: null,
  onSelect: (categoryId: string, nomineeId: string) =>
    set((prev) => ({
      selected: {
        ...prev.selected,
        [categoryId]: nomineeId,
      },
    })),
}))
