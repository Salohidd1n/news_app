import { Container } from '@mui/material'
import NewsList from './List'
import useNews from '../../services/news'
import { FC } from 'react'

const NewsContainer: FC = () => {
  const { news, refetch } = useNews({
    isNewsList: true
  })

  return (
    <Container>
      <NewsList news={news} refetch={refetch} />
    </Container>
  )
}

export default NewsContainer
