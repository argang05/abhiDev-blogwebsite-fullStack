import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative<br/>Thoughts<br/>Agency.</h1>
        <p className={styles.desc}>
          Welcome to Creative Thoughts Agency, your ultimate destination for inspiration, innovation, and imagination. Join us on a journey of creative exploration and limitless possibilities in every thought-provoking post!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>

        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero-1.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;