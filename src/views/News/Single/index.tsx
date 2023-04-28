import { useParams } from 'react-router-dom'
import useNews from '../../../services/news'
import NewsContent from './Content'
import { Container } from '@mui/material'
import useComments from '../../../services/comments'
import { FC, useEffect, useState } from 'react'
import { IComment } from '../../../models'
import { changeCommentById } from '../../../utils/commentsFilter'

const NewsOneContainer: FC = () => {
  const { id } = useParams()
  const [childId, setChildId] = useState<number>()
  const [commentList, setCommentList] = useState<IComment[]>([])
  const [kidIds, setKidIds] = useState<number[]>([])
  const { data } = useNews({
    id: Number(id)
  })

  const { comments } = useComments({
    ids: kidIds
  })

  const filterCommentsById = async (): Promise<void> => {
    const items = [...commentList]
    await changeCommentById(items, comments, childId)
    setCommentList(items)
  }

  useEffect(() => {
    setKidIds(data?.kids || [])
  }, [data])

  useEffect(() => {
    if (childId) {
      filterCommentsById()
    } else {
      setCommentList(comments)
    }
  }, [comments])

  const getChildComments = (id: number, ids: number[]) => {
    setChildId(id)
    setKidIds(ids)
  }

  return (
    <Container>
      <NewsContent
        data={data}
        comments={commentList}
        getChildComments={getChildComments}
      />
    </Container>
  )
}

export default NewsOneContainer
