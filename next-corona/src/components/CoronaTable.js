import { useState } from "react";
import Link from "next/link";
import styles from "./CoronaTable.module.css";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";

const orderBy = (countries, direction) => {
  //오름차순
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a.cases > b.cases ? 1 : -1));
  }
  //내림차순
  if (direction == "desc") {
    return [...countries].sort((a, b) => (a.cases > b.cases ? -1 : 1));
  }
  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <> </>;
  }
  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const CoronaTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCotuntries = orderBy(countries, "desc");

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>
        <button className={styles.heading_name}>
          <div>나라이름</div>

          <SortArrow />
        </button>

        <button className={styles.heading_case}>
          <div>확진환자</div>
          <SortArrow direction="desc" />
        </button>

        <button className={styles.heading_recover}>
          <div>완치자</div>
        </button>

        <button className={styles.heading_death}>
          <div>사망자</div>
        </button>
      </div>

      {orderedCotuntries.map(country => (
        <div className={styles.row} key={country.country}>
          <div className={styles.flag}>
            <img src={country.countryInfo.flag} alt={country.country} />
          </div>
          <div className={styles.name}>{country.country}</div>

          <div className={styles.case}>{country.cases}</div>

          <div className={styles.recover}>{country.recovered || 0}</div>

          <div className={styles.death}>{country.deaths || 0}</div>
        </div>
      ))}
    </div>
  );
};

export default CoronaTable;
