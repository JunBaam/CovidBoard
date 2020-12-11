import React, { useEffect, useState } from "react";
import Head from "next/head";
import CoronaTable from "../components/CoronaTable";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ countries }) {
  return (
    <Layout>
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

  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const countries = await response.json();

  return {
    //props로 전달
    props: {
      countries,
    },
  };
};
