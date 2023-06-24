import styles from "./PagePadding.module.css";
export default function PagePadding({ children }) {
  return <main className={styles.container}>{children}</main>;
}
