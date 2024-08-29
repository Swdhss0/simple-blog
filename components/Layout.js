import Head from 'next/head';
import style from './Layout.module.css'
import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';


const name = 'sawada hisashi';
export const siteTitle = 'next.js simple-blog';

function Layout({children, home}) {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={style.header}>
        {home ? (
          <img src="/images/profile.jpg" className={`${utilStyle.borderCircle} ${style.headerHomeImage}`} />
        ) : (
          <img src="/images/profile.jpg" className={utilStyle.borderCircle} />
        )}
        <h1 className={utilStyle.heading2Xl}>{name}</h1>
      </header>

      <main>{children}</main>

      {home ? (
        <></>
      ) : (
        <div>
          <Link href='/'>←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
