import { Fragment } from 'react';
import Link from 'next/link';

import {
  getDatabase, getBlocks, getPageFromSlug,
} from '../../../lib/notion';
import Text from '../../../components/text';
import { renderBlock } from '../../../components/notion/renderer';
import styles from '../../../styles/post.module.css';

export const revalidate = 60; // ISRの設定：60秒ごとに再検証

export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => ({
    slug: page.properties.Slug?.formula?.string,
  }));
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

  if (!page || !blocks) {
    return <div>Loading...</div>;
  }

  return (
    <article className={styles.container}>
      <h1 className={styles.name}>
        <Text title={page.properties.Title?.title} />
      </h1>
      <section>
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
        <Link href="/" className={styles.back}>
          ← Go home
        </Link>
      </section>
    </article>
  );
}
