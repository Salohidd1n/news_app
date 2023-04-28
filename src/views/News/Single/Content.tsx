import styles from './style.module.scss'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import { INews } from '../../../models'
import { FC } from 'react'

interface Props {
  data?: INews
  comments?: any
  getChildComments?: any
}

const NewsContent: FC<Props> = ({ data, comments, getChildComments }) => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>03.05.2022</p>
      <h1>{data?.title}</h1>
      <p className={styles.author}>
        <span>By: </span>
        {data?.by}
      </p>
      <div className={styles.url}>
        <p>Url:</p>
        <a href={data?.url} target='_blank'>
          {data?.url}
        </a>
      </div>
      <div className={styles.items}>
        <div className={styles.comment}>
          <ForumRoundedIcon /> {data?.kids?.length}
        </div>
        <div className={styles.comment}>
          <StarRateRoundedIcon /> {data?.score}
        </div>
      </div>
      <p className={styles.commentTitle}>Comments</p>
      <div className={styles.comments}>
        {renderChildComments(comments, getChildComments)}
      </div>
    </div>
  )
}

export default NewsContent

const renderChildComments: FC = (comments: any, getChildComments: any) => {
  return comments ? (
    comments.map((item: any) => (
      <div className={styles.item} key={item.id}>
        <p className={styles.by}>{item.by}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: item.text
          }}
          className={styles.text}
        />
        {item?.kids?.length > 0 && (
          <p
            className={styles.more}
            onClick={() => getChildComments(item.id, item.kids)}
          >
            View replies
          </p>
        )}
        {item.comments && renderChildComments(item.comments, getChildComments)}
      </div>
    ))
  ) : (
    <div />
  )
}
