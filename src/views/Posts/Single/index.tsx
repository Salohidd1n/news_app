import { useParams } from 'react-router-dom'
import PostContent from './Content'
import { Container } from '@mui/material'
import { FC } from 'react'
import usePosts from '../../../services/posts'

const PostOneContainer: FC = () => {
  const { id } = useParams()

  const { data } = usePosts({
    id: Number(id)
  })

  return (
    <Container>
      <PostContent data={data} />
    </Container>
  )
}

export default PostOneContainer
