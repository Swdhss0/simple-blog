import Layout from '../../components/Layout'
import {getAllPostIds, getPostData} from '../../lib/post';
import utilStyle from '../../styles/utils.module.css'
import Link from 'next/link';
import Head from 'next/head';
import Date from "../../components/date";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({params}){{

  const postData = await getPostData(params.id);


  return {
    props: {
      postData,
    }
  }
}}


function post({postData}) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}><Date dateString={postData.date} /></div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}/>
      </article>

    </Layout>
  );
}

export default post;
