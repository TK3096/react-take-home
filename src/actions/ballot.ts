'use server'

import { ballotData } from '@/data'

export const list = async () => {
  return ballotData
}
