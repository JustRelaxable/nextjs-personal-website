import styles from "./PrimaryParagraph.module.css";
export default function PrimaryParagraph({ children, style, className }) {
  return (
    <p style={style} className={`${styles.text} ${className}`}>
      {children}
    </p>
  );
}
