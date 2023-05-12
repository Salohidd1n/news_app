import styles from './style.module.scss'
import { IPost } from '../../../models'
import { FC } from 'react'

interface Props {
  data?: IPost
  comments?: any
  getChildComments?: any
}

const PostContent: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>03.05.2022</p>
      <h1>{data?.title}</h1>
      <p className={styles.author}>{data?.body}</p>
    </div>
  )
}

export default PostContent
