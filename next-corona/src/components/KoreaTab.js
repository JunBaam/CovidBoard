import React, { useState, useEffect } from "react";
import styles from "./KoreaTab.module.css";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import axios from "axios";

const KoreaTab = () => {
  const [confirmedData, setConfirmedData] = useState({});
  const [quarantinedData, setQuarantinedData] = useState({});
  const [comparedData, setComparedData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "https://api.covid19api.com/total/dayone/country/kr"
      );

      //console.log("원본", res);
      makeData(res.data);
    };
    const makeData = items => {
      const arr = items.reduce((acc, cur) => {
        const currentData = new Date(cur.Date);
        const year = currentData.getFullYear();
        const month = currentData.getMonth();
        const date = currentData.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;

        //console.log(year, month, date, confirmed, active, death, recovered);

        // 년 월을 비교해서 값이 없으면  추가
        // 값이 있으면 날자를 비교해서 큰 날자값을 추가한다.
        const findItem = acc.find(a => a.year === year && a.month === month);

        if (!findItem) {
          acc.push({
            year,
            month,
            date,
            confirmed,
            active,
            death,
            recovered,
          });
        }

        if (findItem && findItem.date < date) {
          findItem.active = active;
          findItem.death = death;
          findItem.date = date;
          findItem.year = year;
          findItem.month = month;
          findItem.recovered = recovered;
          findItem.confirmed = confirmed;
        }

        return acc;
      }, []);

      console.log(arr);

      const labels = arr.map(a => `${a.month + 1}월`);
      setConfirmedData({
        labels,
        datasets: [
          {
            label: "누적확진자 ",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            hoverBorderWidth: 4,
            data: arr.map(a => a.confirmed),
          },
        ],
      });

      setQuarantinedData({
        labels,
        datasets: [
          {
            label: "월별 격리자(치료중)",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            hoverBorderWidth: 4,
            data: arr.map(a => a.active),
          },
        ],
      });

      //누적최종값
      const last = arr[arr.length - 1];
      setComparedData({
        labels: ["확진환자", "격리해제", "사망자"],
        datasets: [
          {
            borderWidth: 2,
            hoverBorderWidth: 4,
            label: "확진확진,격리해제 ,사망자",
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(102, 102, 102, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(102, 102, 102, 1)",
            ],

            data: [last.confirmed, last.recovered, last.death],
          },
        ],
      });
    };

    fetchEvents();
  }, []);

  return (
    <section>
      <div className={styles.chart_content}>
        <Bar
          data={confirmedData}
          options={
            ({
              title: { display: true, text: "누적확진자" },
            },
            {
              legend: {
                labels: {
                  fontSize: 15,
                },
                display: true,
                position: "bottom",
              },
            })
          }
        />

        <Line
          data={quarantinedData}
          options={
            ({
              title: { display: true, text: "월별 격리자" },
            },
            {
              legend: {
                labels: {
                  fontSize: 15,
                },
                display: true,
                position: "bottom",
              },
            })
          }
        />
        <Doughnut
          data={comparedData}
          options={
            ({
              title: {
                display: true,
                text: `누적확진,해제,사망(${new Date().getMonth() + 1}월)`,
              },
            },
            {
              legend: {
                labels: {
                  fontSize: 15,
                },
                display: true,
                position: "bottom",
              },
            })
          }
          comparedData
        />
      </div>
    </section>
  );
};

export default KoreaTab;
