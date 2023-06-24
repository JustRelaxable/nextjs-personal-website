import Link from "next/link";
import styles from "./ProjecctCategoryLink.module.css";
import Image from "next/image";
export default function ProjecctCategoryLink({ children, color, imgSrc }) {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.colorOverlay} style={{ backgroundColor: color }}>
          <p className={styles.text}>{children}</p>
        </div>
        <Image
          src={imgSrc}
          alt="Category Image"
          style={{ width: "100%", objectFit: "cover" }}
        ></Image>
      </Link>
    </div>
  );
}
