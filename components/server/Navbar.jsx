import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.content}>
      <nav className={styles.linkContainer}>
        <Link href="#">About Me</Link>
        <Link href="#">Toolset</Link>
        <Link href="#">Contact</Link>
        <Link href="#">CV</Link>
      </nav>
    </nav>
  );
}
