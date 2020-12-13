import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>코로나뷰 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a className={styles.header}>
          코로나 뷰
          <div className={styles.header_info}>
            (COVID-19 data sourced from Worldometers, updated every 10 minutes)
          </div>
        </a>
      </Link>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        데이터 출처 :https://disease.sh <br />
        Email: fkdlsl9088@gmail.com <br />
        Next.js Project <br />
        © 2020 Jun Beom All rights reserved. <br />
      </footer>
    </div>
  );
};

export default Layout;
