import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.pcCard}>
      <img
        src="https://picsum.photos/200"
        alt="Profile"
        className={styles.pcImg}
      />
      <h2 className={styles.pcName}>Philip Cabal</h2>
      <p className={styles.pcAge}>Age: 19</p>
      <p className={styles.pcDesc}>College kid simply learning new things.</p>
    </div>
  );
}
