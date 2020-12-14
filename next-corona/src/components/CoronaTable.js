import { useCallback, useState } from "react";
import Link from "next/link";
import styles from "./CoronaTable.module.css";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";

const orderBy = (countries, value, direction) => {
  // console.log(countries);

  //오름차순
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  //내림차순
  if (direction == "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
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
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  }
};

const CoronaTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCotuntries = orderBy(countries, value, direction);

  // 함수 재사용 리렌더링방지
  const switchDirection = useCallback(() => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  });

  const setValueAndDirection = useCallback(value => {
    switchDirection();
    setValue(value);
  });

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>
        <span className={styles.heading_name}>
          <div>나라이름</div>
        </span>

        <button
          className={styles.heading_case}
          onClick={() => setValueAndDirection("cases")}
        >
          <div>확진환자</div>
          {value === "cases" && <SortArrow direction={direction} />}
        </button>

        <button className={styles.heading_recover}>
          <div>격리해제</div>
        </button>

        <button className={styles.heading_death}>
          <div>사망자</div>
        </button>
      </div>

      {orderedCotuntries.map(country => (
        <Link href={`/country/${country.country}`} key={country.country}>
          <div className={styles.row}>
            <div className={styles.flag}>
              <img src={country.countryInfo.flag} alt={country.country} />
            </div>
            <div className={styles.name}>{country.country} </div>

            <div className={styles.case}>
              {country.cases}
              <span>명</span>
            </div>

            <div className={styles.recover}>{country.recovered}명 </div>

            <div className={styles.death}>{country.deaths}명 </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoronaTable;
