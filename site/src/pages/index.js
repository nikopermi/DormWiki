import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from "react";
import Events from './events';

import { useRouter } from "next/router";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <>
    <Head>
      <title>Dorm-Wiki</title>
      <meta name="description" content="Your go-to place for UW dorm info" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon-dorm-wiki.png" />
    </Head>
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link a href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/wiki">Wiki</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
      <button type="button">Login</button>
    </div>
    <main className={styles.main}>
      <div className={styles.content}>
        <div >
          <img style={{ height:'252px',  width: '252px' }} src="/dorm-wiki-logo.png"></img>
        </div>
        
        <div className={styles.slideshow}>
          <div className={styles.imglink}>
            <Link href="/wiki/maple-hall">
              <img src="/maple-hall\Maple-exterior.jpg"></img>
            </Link>
          </div>
        </div>
        <h2 className={styles.hrtitle}>
          Upcoming Events
        </h2>
        <div className={styles.upcoming_events}>
          <div className={styles.event_deck}>a</div>
          <div className={styles.event_deck}>a</div>
          <div className={styles.event_deck}>a</div>
          <div className={styles.event_deck}>a</div>
        </div>
      </div>
    </main>
    </>
  );
}
