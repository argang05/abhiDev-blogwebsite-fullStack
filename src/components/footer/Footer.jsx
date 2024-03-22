import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>abhidev</div>
      <div className={styles.text}>
        Abhi creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;