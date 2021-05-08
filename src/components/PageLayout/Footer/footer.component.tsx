import React from 'react';
import dynamic from 'next/dynamic';
import styles from './footer.module.less';

const DefaultFooter = dynamic<any>(
  () => import('@ant-design/pro-layout').then((mod) => mod.DefaultFooter),
  {
    ssr: false,
  },
);

export default function Footer(props: any) {
  return (
    <>
      <DefaultFooter
        className={styles.footer}
        prefixCls="footer"
        links={[
          { key: 'Ant Design', title: 'Ant Design', href: 'https://ant.design', blankTarget: true },
          {
            key: 'My Company',
            title: 'My Company',
            href: 'https://www.example.com',
            blankTarget: true,
          },
        ]}
        copyright={
          process.env.NEXT_PUBLIC_COPYRIGHT
            ? `${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_COPYRIGHT}`
            : false
        }
      />
    </>
  );
}
