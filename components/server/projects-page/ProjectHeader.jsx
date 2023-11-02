import styles from "./ProjectHeader.module.css";
export default function ProjectHeader({ children, url }) {
  return url ? (
    <a className={styles.urlHeader} href={url}>
      <h3 className={styles.header}>{children}</h3>
    </a>
  ) : (
    <h3 className={styles.header}>{children}</h3>
  );
}
