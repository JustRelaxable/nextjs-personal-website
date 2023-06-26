import styles from "./SectionHeader.module.css";
export default function SectionHeader({
  children,
  doubleSideSeperator,
  containerStyle,
  customContainerClass,
}) {
  return (
    <div
      style={containerStyle}
      className={`${styles.container} ${customContainerClass}`}
    >
      {doubleSideSeperator && <div className={styles.seperator}></div>}
      <h2 className={styles.header}>{children}</h2>
      <div className={styles.seperator}></div>
    </div>
  );
}
