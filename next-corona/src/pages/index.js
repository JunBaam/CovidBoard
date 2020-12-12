import React, { useEffect, useState } from "react";
import Head from "next/head";
import CoronaTable from "../components/CoronaTable";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import styles from "../styles/Home.module.css";
import axios from "axios";
import GlobalBorad from "../components/GlobalBorad";

export default function Home({ countries, global, korea }) {
  return (
    <Layout>
      <GlobalBorad global={global} korea={korea} />
      <div className={styles.counts}>총 {countries.length}개의 나라</div>
      <SearchInput placeholder="검색" />
      <CoronaTable countries={countries} />
    </Layout>
  );
}

//정적페이지를 미리 랜더링(빌드후 변경불가!) 빌드 시점에 API 값을 조회
export const getStaticProps = async () => {
  // const res = await fetch("https://covid19.mathdro.id/api/countries");
  // const countries = await res.json();

  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  const countries = await res.json();

  const res1 = await fetch("https://disease.sh/v3/covid-19/all");
  const global = await res1.json();

  const res2 = await fetch(
    "https://disease.sh/v3/covid-19/countries/S.%20Korea"
  );
  const korea = await res2.json();

  return {
    //props로 전달
    props: {
      countries,
      global,
      korea,
    },
  };
};
