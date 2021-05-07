import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import { Button, Card, Typography } from 'antd';

import styles from '@styles/Home.module.less';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> with{' '}
          <a href="https://ant.design/">Ant Design</a>
        </h1>

        <p className={styles.description}>Select you app below</p>
        <Card style={{ width: '60%' }}>
          <ol>
            <li style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
              <Typography.Title level={3} style={{ flexGrow: 1 }}>
                App 1
              </Typography.Title>
              <Button type="default" size="large">
                <Link href="/app-1">
                  <a>View</a>
                </Link>
              </Button>
            </li>
            <li style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
              <Typography.Title level={3} style={{ flexGrow: 1 }}>
                Stay Here
              </Typography.Title>
              <Button type="default" size="large">
                <Link href="#">
                  <a>View</a>
                </Link>
              </Button>
            </li>
            <li style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
              <Typography.Title level={3} style={{ flexGrow: 1 }}>
                Go Nowhere
              </Typography.Title>
              <Button type="default" size="large">
                <Link href="#">
                  <a>View</a>
                </Link>
              </Button>
            </li>
          </ol>
        </Card>
      </main>

      <footer className={styles.footer}>Powered by Platformerie</footer>
    </div>
  );
}
