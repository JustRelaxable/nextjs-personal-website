import styles from "./PagePadding.module.css";
export default function PagePadding({ children, style, customClass }) {
  return (
    <div style={style} className={`${styles.container} ${customClass}`}>
      {children}
    </div>
  );
}
