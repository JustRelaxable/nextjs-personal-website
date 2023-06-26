import Link from "next/link";
import styles from "./FooterSection.module.css";
export default function FooterSection() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>Designed & Built by Taha Sokmen</p>
      <a
        href="https://github.com/JustRelaxable/nextjs-personal-website"
        target="_blank"
      >
        Check out on Github
      </a>
    </footer>
  );
}
