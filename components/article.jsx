import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyle from '../styles/utils.module.css'
import Link from 'next/link';

function article({post}) {
  const {thumbnail, title, id, date  } = post;
  return (
    <article className={styles.article}>
      <Link href={`/posts/${id}`}>
        <img src={thumbnail} className={styles.thumbnailImage} />
      </Link>
      <Link href={`/posts/${id}`} className={utilStyle.boldText}>
          {title}
      </Link>
      <small className={utilStyle.lightText}>
        {date}
      </small>
    </article>
  );
}

export default article;
