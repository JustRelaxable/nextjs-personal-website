import Link from "next/link";
import styles from "./Navbar.module.css";
import TSLogo from "./TSLogo";
export default function Navbar() {
  return (
    <nav className={styles.content}>
      <TSLogo></TSLogo>
      <nav className={styles.linkContainer}>
        <Link href="#">Projects</Link>
        <Link href="/CV-Taha-Sokmen.pdf">CV</Link>
      </nav>
    </nav>
  );
}
