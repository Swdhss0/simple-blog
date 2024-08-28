import Head from 'next/head';
import style from './Layout.module.css'
import utilStyle from '../styles/utils.module.css';

const name = 'sawada hisashi';
export const siteTitle = 'next.js simple-blog';

function Layout({children}) {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={style.header}>
        <img src="/images/profile.jpg" className={utilStyle.borderCircle} />
        <h1 className={utilStyle.heading2Xl}>{name}</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
