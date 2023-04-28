export interface INews {
  title: string
  by: string
  type: string
  url: string
  time: number
  kids: number[]
  score: number[]
  id: number[]
  descendants: number[]
}

export interface IComment {
  text: string
  by: string
  type: string
  time: number
  kids: number[]
  parrent: number
  id: number[]
}
