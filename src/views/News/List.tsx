import styles from './style.module.scss'
import { INews } from '../../models'
import NewsCard from '../../components/NewsCard'
import { FC } from 'react'
import { Button } from '@mui/material'

interface Props {
  news?: INews[]
  refetch: () => void
}

const NewsList: FC<Props> = ({ news, refetch }) => {
  return (
    <div className={styles.box}>
      <div className={styles.button}>
        <Button onClick={refetch}>Update news</Button>
      </div>
      <div className={styles.list}>
        {news?.map((item: any) => (
          <NewsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default NewsList
