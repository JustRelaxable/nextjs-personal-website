import Link from "next/link";
import styles from "./FooterSection.module.css";
export default function FooterSection() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>Designed & Built by Taha Sokmen</p>
      <Link href="https://github.com/JustRelaxable/nextjs-personal-website">
        Check out on Github
      </Link>
    </footer>
  );
}
