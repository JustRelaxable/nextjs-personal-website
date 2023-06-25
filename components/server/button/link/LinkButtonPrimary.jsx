import styles from "./LinkButtonPrimary.module.css";
import Link from "next/link";
export default function LinkButtonPrimary({ children, href, target }) {
  return (
    <Link href={href} target={target} className={styles.container}>
      {children}
    </Link>
  );
}
