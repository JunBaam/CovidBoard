import { Brightness6Rounded } from "@material-ui/icons";
import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const saveTheme = theme => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  const changeTheme = useCallback(() => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>코로나뷰 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>코로나 뷰</a>
        </Link>
        {/* 테마 변경버튼  */}
        <button className={styles.theme_mode_btn} onClick={changeTheme}>
          <Brightness6Rounded />
        </button>
      </header>
      <div className={styles.header_info}>
        (COVID-19 data sourced from Worldometers, updated every 10 minutes)
      </div>

      {/* <img src="/moon.png" /> */}
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
