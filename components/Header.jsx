import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.pcHeaderWrap}>
      <h1 className={styles.pcMainTitle}>My Profile</h1>
      <h2 className={styles.pcSubTitle}>Philip Cabal</h2>
    </header>
  );
}
