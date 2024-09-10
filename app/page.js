import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import Text from '../components/text';
import styles from './page.module.css';
import PostItem from '../components/post/PostItem';
import stylesPost from '../components/post/PostItem.module.css';

export const databaseId = process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

export const revalidate = 60; // ISRの設定：60秒ごとに再検証

async function getPosts() {
  const database = await getDatabase(databaseId);
  return database;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
            const coverImage = post.cover?.external?.url !== undefined ? post.cover?.external?.url : 'none';
            if (post.properties?.Tags?.multi_select[0]) {
              const tags = post.properties?.Tags?.multi_select[0].name;
              if (tags === 'main') {
                return (
                  <div key={post.id}>
                    <Link href={`/article/${slug}`} className={styles.title}>
                      <img
                        src={coverImage}
                        alt="cover画像"
                        style={{
                          height: '100%',
                          objectFit: 'cover',
                          width: '100%', // 必要に応じて幅も設定
                        }}
                      />
                    </Link>
                    <h3 className={styles.postTitle}>
                      <Link href={`/article/${slug}`} className={styles.postLink}>
                        <Text title={post.properties?.Title?.title} />
                      </Link>
                    </h3>
                    <p className={styles.postDate}>{date}</p>
                  </div>
                );
              }
            }
            return null; // 条件に合わない場合は明示的にnullを返す
          })}
          <h1 className={styles.h1}>RECENT POSTS</h1>
          <div className={stylesPost.div}>
            <div className={stylesPost.postsGrid}>
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
                const coverImage = post.cover?.external?.url !== undefined ? post.cover?.external?.url : 'none';
                if (!post.properties?.Tags?.multi_select[0]) {
                  return (
                    <PostItem
                      key={post.id}
                      post={post}
                      slug={slug}
                      cover={coverImage}
                      date={date}
                    />
                  );
                }
                return null; // 条件に合わない場合は明示的にnullを返す
              })}
            </div>
          </div>
        </ol>
      </main>
    </div>
  );
}
