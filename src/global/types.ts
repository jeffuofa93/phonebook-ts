import { Dispatch, SetStateAction } from 'react'

export interface Person {
  id: string
  name: string
  number: string
}

export type setState = Dispatch<SetStateAction<string>>
export type delRequest = (id: string) => void