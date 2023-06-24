import Link from "next/link";
import styles from "./Navbar.module.css";
import TSLogo from "./TSLogo";
export default function Navbar() {
  return (
    <nav className={styles.content}>
      <TSLogo></TSLogo>
      <nav className={styles.linkContainer}>
        <Link href="#">About Me</Link>
        <Link href="#">Toolset</Link>
        <Link href="#">Contact</Link>
        <Link href="#">CV</Link>
      </nav>
    </nav>
  );
}
