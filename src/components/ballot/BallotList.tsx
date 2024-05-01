'use client'

import { Nominee } from '@/types'

import React from 'react'

import { useSelectNominee } from '@/hooks/useSelectNominee'

import { NomineeCard } from '@/components/ballot/NomineeCard'

interface BallotListProps {
  categoryId: string
  categoryName: string
  nominees: Nominee[]
}

export const BallotList: React.FC<BallotListProps> = (
  props: BallotListProps,
) => {
  const { categoryId, categoryName, nominees } = props

  const { selected, onSelect } = useSelectNominee()

  return (
    <div className='bg-indigo-900/30 space-y-4'>
      <div className='bg-indigo-900/50 px-5 py-2 rounded-md'>
        <h3 className='text-2xl font-semibold'>{categoryName}</h3>
      </div>
      <div className='px-5 pb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 justify-items-center'>
        {nominees.map((nominee) => (
          <div key={nominee.id} className='w-full'>
            <NomineeCard
              id={nominee.id}
              categoryId={categoryId}
              category={categoryName}
              title={nominee.title}
              photoUrl={nominee.photoUrl}
              onClick={onSelect}
              active={
                (selected &&
                  selected[categoryId] &&
                  selected[categoryId].id === nominee.id) ||
                false
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
