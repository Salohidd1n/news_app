import { useEffect, useState } from 'react'
import { request } from './http-client'
import { IComment } from '../models'

const getCommentsByIdApi = async (id: number) =>
  request.get(`item/${id}.json?print=pretty`)

interface Params {
  id?: number | undefined
  ids?: number[]
}

export default function useComments({ ids }: Params = {}): {
  comments: IComment[]
} {
  const [comments, setComments] = useState<IComment[]>([])

  const getAllItems = async (): Promise<void> => {
    if (ids && ids.length !== 0) {
      const items: IComment[] = []
      for (let i = 0; i < ids.length; i++) {
        const item = await getCommentsByIdApi(ids[i])
        items.push(item.data)
      }
      setComments(items)
    }
  }

  useEffect(() => {
    getAllItems()
  }, [ids])

  return {
    comments
  }
}
