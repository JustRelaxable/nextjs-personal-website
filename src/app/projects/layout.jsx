import styles from "./layout.module.css";
export default function ProjectPageLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
