import styles from "./PagePadding.module.css";
export default function PagePadding({ children, style }) {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
}
