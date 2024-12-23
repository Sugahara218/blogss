import { Fragment } from 'react';
import Link from 'next/link';

import {
  getDatabase, getBlocks, getPageFromSlug,
} from '../../../lib/notion';
import Text from '../../../components/text';
import { renderBlock } from '../../../components/notion/renderer';
import styles from '../../../styles/post.module.css';
import styles2 from '../../../styles/PostItemRen.module.css';
import PostItemRen from '../../../components/post/PostItemRen';
import { databaseId } from '../../page';
import PostItem from '../../../components/post/PostItem';

export const revalidate = 60; // ISRの設定：60秒ごとに再検証

export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => ({
    slug: page.properties.Slug?.formula?.string,
  }));
}

async function getPosts() {
  const database = await getDatabase(databaseId);
  return database;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const page = await getPageFromSlug(slug);
  return {
    title: page?.properties.Title?.title[0]?.plain_text || 'Article',
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const page = await getPageFromSlug(slug);
  const blocks = await getBlocks(page?.id);
  const coverImage = page.cover.external.url;
  const title = page.properties.Title?.title;

  if (!page || !blocks) {
    return <div>Loading...</div>;
  }
  const posts = await getPosts();

  return (
    <article className={styles2.container}>
      <h1 className={styles2.h1}>
        <Text title={title} />
      </h1>
      <PostItemRen src={coverImage} className={styles2.container} />
      <div className={styles2.divGrid}>
        <section className={styles2.section}>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
        <div className={styles2.sideContent}>
          <h1 className={styles.h1}>Most Popular</h1>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              },
            );
            const slugs = post.properties?.Slug?.rich_text[0].text.content;
            const coverImages = post.cover?.external?.url !== undefined ? post.cover?.external?.url : 'none';
            if (!post.properties?.Tags?.multi_select[0]) {
              return (
                <PostItem
                  key={post.id}
                  post={post}
                  slug={slugs}
                  cover={coverImages}
                  date={date}
                />
              );
            }
            return null; // 条件に合わない場合は明示的にnullを返す
          })}
        </div>
      </div>
      <Link href="/" className={styles.back}>
        ← Go home
      </Link>

    </article>
  );
}
