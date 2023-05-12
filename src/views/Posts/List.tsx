import styles from './style.module.scss'
import { IPost } from '../../models'
import { FC } from 'react'
import PostCard from '../../components/PostCard'

interface Props {
  posts?: IPost[]
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className={styles.box}>
      <div className={styles.list}>
        {posts?.map((item: any) => (
          <PostCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default PostList
