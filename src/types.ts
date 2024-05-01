export interface Nominee {
  id: string
  title: string
  photoUrl: string
}

export interface Category {
  id: string
  title: string
  items: Nominee[]
}

export interface Selected {
  [key: string]: string
}
