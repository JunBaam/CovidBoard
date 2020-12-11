import Head from "next/head";
import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>COVID </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>코로나분석</header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Email: fkdlsl9088@gmail.com <br />
        Next.js Project <br />
        © 2020 Jun Beom All rights reserved. <br />
      </footer>
    </div>
  );
};

export default Layout;
