import styles from "./SectionHeader.module.css";
export default function SectionHeader({
  children,
  doubleSideSeperator,
  containerStyle,
}) {
  return (
    <div style={containerStyle} className={styles.container}>
      {doubleSideSeperator && <div className={styles.seperator}></div>}
      <h2 className={styles.header}>{children}</h2>
      <div className={styles.seperator}></div>
    </div>
  );
}
