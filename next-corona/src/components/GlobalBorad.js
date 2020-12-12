import React from "react";
import styles from "./GlobalBorad.module.css";

const GlobalBorad = ({ global, korea }) => {
  return (
    <div className={styles.board_container}>
      <div className={styles.global_title}>전세계 현황</div>

      <div className={styles.global_board}>
        <div className={styles.global_case}>
          확진환자
          <div className={styles.global_case_count}>{global.cases}</div>
          <div className={styles.korea_case_today}>(+ {global.todayCases})</div>
        </div>
        <div className={styles.global_recover}>
          완치자
          <div className={styles.global_recover_count}>{global.recovered}</div>
          <div className={styles.korea_recover_today}>
            (+ {global.todayRecovered})
          </div>
        </div>
        <div className={styles.global_death}>
          사망자
          <div className={styles.global_death_count}>{global.deaths}</div>
          <div className={styles.korea_death_today}>
            (+ {global.todayDeaths})
          </div>
        </div>
      </div>

      <div className={styles.korea_title}>대한민국 현황</div>
      <div className={styles.korea_board}>
        <div className={styles.korea_case}>
          확진환자 <div className={styles.korea_case_count}>{korea.cases}</div>
          <div className={styles.korea_case_today}>(+ {korea.todayCases})</div>
        </div>
        <div className={styles.korea_recover}>
          완치자
          <div className={styles.korea_recover_count}>{korea.recovered}</div>
          <div className={styles.korea_recover_today}>
            (+ {korea.todayRecovered})
          </div>
        </div>
        <div className={styles.korea_death}>
          사망자
          <div className={styles.korea_death_count}>{korea.deaths}</div>
          <div className={styles.korea_death_today}>
            (+ {korea.todayDeaths})
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBorad;
