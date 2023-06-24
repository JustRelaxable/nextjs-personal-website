import styles from "./SectionHeader.module.css";
export default function SectionHeader({ children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{children}</h2>
      <div className={styles.seperator}></div>
    </div>
  );
}
