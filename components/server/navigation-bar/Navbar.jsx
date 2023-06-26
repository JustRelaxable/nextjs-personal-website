import Link from "next/link";
import styles from "./Navbar.module.css";
import TSLogo from "./TSLogo";
import MobileMenuButton from "../../client/MobileMenuButton";
export default function Navbar() {
  return (
    <nav className={styles.content}>
      <TSLogo></TSLogo>
      <nav className={styles.linkContainer}>
        <Link href="#">Projects</Link>
        <Link href="/CV-Taha-Sokmen.pdf" target="_blank">
          CV
        </Link>
      </nav>
      <MobileMenuButton
        buttonClass={styles.mobileMenuButton}
      ></MobileMenuButton>
    </nav>
  );
}
