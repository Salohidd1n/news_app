import { Container } from '@mui/material'
import PostList from './List'
import { FC } from 'react'
import usePosts from '../../services/posts'

const PostsContainer: FC = () => {
  const { posts } = usePosts({
    isPosts: true
  })

  return (
    <Container>
      <PostList posts={posts} />
    </Container>
  )
}

export default PostsContainer
