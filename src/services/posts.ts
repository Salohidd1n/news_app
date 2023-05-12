import { useEffect, useState } from 'react'
import { request } from './http-client'
import { IPost } from '../models'

const getPosts = async () => request.get('posts')

const getPostsById = async (id: number) => request.get(`posts/${id}`)

interface Params {
  id?: number | undefined
  isPosts?: boolean
}

export default function usePosts({ id, isPosts = false }: Params = {}) {
  const [posts, setPosts] = useState<IPost[]>([])
  const [data, setData] = useState<IPost>()

  const getAllItems = async (): Promise<void> => {
    const res = await getPosts()
    setPosts(res.data)
  }

  const refetch = (): void => {
    getAllItems()
  }

  const getPost = async (): Promise<void> => {
    if (id) {
      const res = await getPostsById(id)
      setData(res.data)
    }
  }

  useEffect(() => {
    getPost()
  }, [id])

  useEffect(() => {
    if (isPosts) getAllItems()
  }, [])

  return {
    posts,
    data,
    refetch
  }
}
