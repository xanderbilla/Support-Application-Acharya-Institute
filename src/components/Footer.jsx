import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img className={styles.logo} src="/img/logo.png" alt="" />
          <div className={styles.partner}>
            <img
              className={styles.img}
              src="https://www.pegasusone.com/wp-content/uploads/2015/08/fullstacklogo1-1.png"
              alt=""
            />
            <span className={styles.text}>Development</span>
          </div>
        </div>
        <div className={styles.right}>
          This page doesn't contain any data on it's own server/domain. In case
          of any loss or misuse of data the administrator will not be
          responsible.
        </div>
      </div>
      <div className={styles.copy}>
        <span className={styles.copyright}>© Xander Billa | All Rights Reserved</span>
        <span className={styles.created}>This page is created by Vikas Singh.</span>
      </div>
    </footer>
  );
};

export default Footer;
