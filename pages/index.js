import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyle from '../styles/utils.module.css'
import Link
 from 'next/link';
import Layout from '../components/Layout';
import Article from '../components/article.jsx'
import {getPostDatas} from '../lib/post'

//ssg
export async function getStaticProps() {
  const allPostDatas = await getPostDatas();

  return {
    props: {
      allPostDatas,
    }
  };
}

export default function Home({allPostDatas}) {

  return (
    <Layout home>
      <Head>
        <title>HOME</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>ポートフォリオ制作中のフリーター</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 >フリーターのブログ</h2>

        <div className={styles.grid}>
          {allPostDatas.map((post) => (
            <Article post={post} key={post.id}/>
          ))}
        </div>
      </section>

    </Layout>
  )
}
