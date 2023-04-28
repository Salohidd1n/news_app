import { useEffect, useState } from 'react'
import { request } from './http-client'
import { INews } from '../models'

const getNewsApi = async () => request.get('topstories.json?print=pretty')

const getNewsByIdApi = async (id: number) =>
  request.get(`item/${id}.json?print=pretty`)

interface Params {
  id?: number | undefined
  isNewsList?: boolean
}

interface IUseNews {
  data?: INews
  news: INews[]
  refetch: () => void
}

export default function useNews({
  id,
  isNewsList = false
}: Params = {}): IUseNews {
  const [news, setNews] = useState<INews[]>([])
  const [data, setData] = useState<INews>()

  const getAllItems = async (): Promise<void> => {
    setNews([])
    const news = await getNewsApi()
    const items: INews[] = []
    let count = 10
    for (let i = 0; i < 100; i++) {
      const item = await getNewsByIdApi(news.data[i])
      items.push(item.data)
      if (count - 1 === i) {
        setNews([...items])
        count += 10
      }
    }
  }

  const refetch = (): void => {
    getAllItems()
  }

  const getNewsById = async (): Promise<void> => {
    if (id) {
      const value = await getNewsByIdApi(id)
      setData(value.data)
    }
  }

  useEffect(() => {
    getNewsById()
  }, [id])

  useEffect(() => {
    if (isNewsList) getAllItems()
  }, [])

  useEffect(() => {
    setInterval(() => {
      console.log('refetch')
      if (isNewsList) getAllItems()
    }, 60000)
  }, [])

  return {
    news,
    data,
    refetch
  }
}
