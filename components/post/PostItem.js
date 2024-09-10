import Link from 'next/link';
import Text from '../text';
import styles from './PostItem.module.css';

function PostItem({
  post,
  slug,
  cover,
  date,
}) {
  return (
    <div className={styles.post}>
      {cover !== 'none' && (
        <Link href={`/article/${slug}`} className={styles.title}>
          <img src={cover} alt={post.properties?.Title?.title || 'Post cover'} className={styles.postImg} />
        </Link>
      )}
      <div>
        <Link href={`/article/${slug}`} className={styles.title}>
          <Text title={post.properties?.Title?.title} className={styles.title} />
        </Link>
      </div>
      <div className={styles.date}>
        <p className={styles.date}>{date}</p>
      </div>
      <Link href={`/article/${slug}`} className={styles.date}>
        <p className={styles.readMore}>Read more</p>
      </Link>
    </div>
  );
}

export default PostItem;
