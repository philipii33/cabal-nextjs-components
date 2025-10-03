import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <div className={styles.pcSkillsWrap}>
      <h3 className={styles.pcSkillsTitle}>Skills</h3>
      <ul className={styles.pcSkillsList}>
        <li className={styles.pcSkillItem}>JavaScript</li>
        <li className={styles.pcSkillItem}>React</li>
        <li className={styles.pcSkillItem}>Next.js</li>
      </ul>
    </div>
  );
}
