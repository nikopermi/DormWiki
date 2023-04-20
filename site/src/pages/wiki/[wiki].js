import Head from 'next/head'
import { useRouter } from "next/router";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Wiki() {
  const router = useRouter()
  const dorm = router.query.wiki
  return (
    <>
      <Head>
        <title>{dorm}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-dorm-wiki.png" />
      </Head>
      <div className={styles.navbar}>
        <div id="logo">
          <img src="/dorm-wiki-logo.png"></img>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
          <li>
            <Link href="#">Wiki</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Search</Link>
          </li>
        </ul>
        <button type="button">Login</button>
      </div>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link href="#">Link</Link>
          </li>
          <li>
            <Link href="#">Link</Link>
          </li>
        </ul>
      </div>
      <main className={styles.main}>
        
      </main>
    </>
  );
}