import styles from './style.module.scss'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { NavLink } from 'react-router-dom'
import { INews } from '../../models'
import { FC } from 'react'

interface Props {
  item: INews
}

const NewsCard: FC<Props> = ({ item }) => {
  return (
    <NavLink to={`/news/${item.id}`} className={styles.item}>
      <div className={styles.basicInfo}>
        <div className={styles.info}>
          <h2>{item.title}</h2>
          <div className={styles.comment}>
            <ForumRoundedIcon fontSize='small' /> {item.kids?.length}
          </div>
          <div className={styles.comment}>
            <StarRateRoundedIcon fontSize='small' /> {item.score}
          </div>
        </div>
        <p className={styles.author}>
          <span>By:</span> {item.by}
        </p>
      </div>
      <div className={styles.rigthElements}>
        <p className={styles.date}>05.06.2023</p>
        <p className={styles.more}>
          Read more
          <KeyboardArrowRightRoundedIcon />
        </p>
      </div>
    </NavLink>
  )
}

export default NewsCard
