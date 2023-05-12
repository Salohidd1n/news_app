import styles from './style.module.scss'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../models'
import { FC } from 'react'

interface Props {
  item: IPost
}

const PostCard: FC<Props> = ({ item }) => {
  return (
    <NavLink to={`/posts/${item.id}`} className={styles.item}>
      <div className={styles.basicInfo}>
        <div className={styles.info}>
          <h2>{item.title}</h2>
          <div className={styles.text}>{item.body}</div>
        </div>
        <p className={styles.more}>
          Read more
          <KeyboardArrowRightRoundedIcon />
        </p>
      </div>
    </NavLink>
  )
}

export default PostCard
