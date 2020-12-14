import Layout from "../../components/Layout";
import styles from "./Country.module.css";

const Country = ({ country }) => {
  console.log("받은값", country);

  const date = new Date(parseInt(country.updated));
  const lastUpdated = date.toString();
  return (
    <Layout>
      <div className={styles.detail_container}>
        <div className={styles.left_detail_container}>
          <img src={country.countryInfo.flag} alt={country.country} />

          <div className={styles.country_name}>{country.country}</div>

          <div className={styles.left_detail_info}>
            <div className={styles.left_detail_population}>
              <div className={styles.left_detail_label}>인구수</div>
              <div className={styles.left_detail_value}>
                {country.population} 명
              </div>
            </div>

            <div className={styles.left_detail_continent}>
              <div className={styles.left_detail_label}>대륙</div>
              <div className={styles.left_detail_value}>
                {country.continent}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right_detail_container}>
          <div className={styles.right_detail_heading}>
            COVID-19 Info : {country.country} <br />
            {lastUpdated}
          </div>

          <div className={styles.right_detail_item}>
            <div className={styles.right_detail_label}>확진환자</div>
            <div className={styles.right_detail_value}>
              {country.cases} 명
              <span className={styles.right_detail_value_case}>
                (+{country.todayCases})
              </span>
            </div>
          </div>

          <div className={styles.right_detail_item}>
            <div className={styles.right_detail_label}>격리해제</div>
            <div className={styles.right_detail_value}>
              {country.recovered} 명
              <span className={styles.right_detail_value_recover}>
                (+{country.todayRecovered})
              </span>
            </div>
          </div>

          <div className={styles.right_detail_item}>
            <div className={styles.right_detail_label}>사망자</div>
            <div className={styles.right_detail_value}>
              {country.deaths} 명
              <span className={styles.right_detail_value_death}>
                (+{country.todayDeaths})
              </span>
            </div>
          </div>

          <div className={styles.right_detail_item}>
            <div className={styles.right_detail_label}>검사완료</div>
            <div className={styles.right_detail_value}>{country.tests} 명</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/countries/${params.id}`
  );

  const country = await response.json();

  return {
    props: {
      country,
    },
  };
};

export default Country;
