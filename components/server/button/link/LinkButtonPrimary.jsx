import styles from "./LinkButtonPrimary.module.css";
import Link from "next/link";
export default function LinkButtonPrimary({ children, href }) {
  return (
    <button className={styles.container}>
      <Link href={href}>{children}</Link>
    </button>
  );
}
