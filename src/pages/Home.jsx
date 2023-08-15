import Contents from "../components/Contents";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img
            src="https://www.pegasusone.com/wp-content/uploads/2015/08/fullstacklogo1-1.png"
            alt="logo"
            className={styles.logo}
          />
          <span className={styles.text}>Development</span>
        </div>
        <p className={styles.desc}>
          This is a complete syllabus content - Full Stack Development of{" "}
          <strong> V Semester for Acharya Polytechnic</strong>, it can also be
          considered as a pathway i.e., not limited to syllabus only.
        </p>
        <p>
        <a target="_blank"
            href="https://xanderbilla.s3.ap-south-1.amazonaws.com/The+Complete+2023+Web+Development+Bootcamp.torrent"
            className={styles.link} rel="noreferrer"
          >Complete Full Stack Crash Course
          </a>
        </p>
      </div>
      <div className={styles.content}>
        <Contents />
      </div>
      <div className={styles.info}>
        <span className={styles.created}>
          <strong>Created At:</strong> February 4, 2023
        </span>
        <span className={styles.updated}>
          <strong>Last Updated:</strong> August 15, 2023
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
