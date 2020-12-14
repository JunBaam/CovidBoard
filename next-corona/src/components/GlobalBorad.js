import React from "react";
import styles from "./GlobalBorad.module.css";

const GlobalBorad = ({ global, korea }) => {
  return (
    <div className={styles.board_container}>
      <div className={styles.board_title}>
        전세계 현황 <br />
      </div>

      <div className={styles.board}>
        <div className={styles.global_case}>
          확진환자
          <div className={styles.global_case_count}>{global.cases}</div>
          <div className={styles.global_case_count_today}>
            + {global.todayCases}
          </div>
        </div>

        <div className={styles.global_case}>
          격리해제
          <div className={styles.global_case_count}>{global.recovered}</div>
          <div className={styles.global_recover_count_today}>
            + {global.todayRecovered}
          </div>
        </div>

        <div className={styles.global_case}>
          사망자
          <div className={styles.global_case_count}>{global.deaths}</div>
          <div className={styles.global_case_count_today}>
            + {global.todayDeaths}
          </div>
        </div>
      </div>

      <div className={styles.board_title}>대한민국 현황</div>
      <div className={styles.board}>
        <div className={styles.global_case}>
          확진환자
          <div className={styles.global_case_count}>{korea.cases}</div>
          <div className={styles.global_case_count_today}>
            + {korea.todayCases}
          </div>
        </div>

        <div className={styles.global_case}>
          격리해제
          <div className={styles.global_case_count}>{korea.recovered}</div>
          <div className={styles.global_recover_count_today}>
            + {korea.todayRecovered}
          </div>
        </div>

        <div className={styles.global_case}>
          사망자
          <div className={styles.global_case_count}>{korea.deaths}</div>
          <div className={styles.global_case_count_today}>
            + {korea.todayDeaths}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBorad;
