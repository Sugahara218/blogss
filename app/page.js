import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import Text from '../components/text';
import styles from './page.module.css';

export const databaseId = process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

async function getPosts() {
  const database = await getDatabase();
  return database;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Rhythm & Words</h1>
          <p className={styles.subtitle}>
            A symphony of thoughts on music, powered by Notion API
          </p>
          <div className={styles.links}>
            <Link href={`https://www.notion.so/${databaseId}`} className={styles.link}>
              Notion Source
            </Link>
            <Link href="https://github.com/samuelkraft/notion-blog-nextjs" className={styles.link}>
              GitHub Repo
            </Link>
            <Link href="https://samuelkraft.com/blog/building-a-notion-blog-with-public-api" className={styles.link}>
              Build Your Own
            </Link>
          </div>
        </header>

        <h2 className={styles.sectionTitle}>Latest Tracks</h2>
        <ol className={styles.postList}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              },
            );
            const slug = post.properties?.Slug?.rich_text[0].text.content;
            return (
              <li key={post.id} className={styles.postItem}>
                <h3 className={styles.postTitle}>
                  <Link href={`/article/${slug}`} className={styles.postLink}>
                    <Text title={post.properties?.Title?.title} />
                  </Link>
                </h3>
                <p className={styles.postDate}>{date}</p>
                <Link href={`/article/${slug}`} className={styles.readMore}>
                  Read more
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
