import Link from "next/link";
import styles from "./ProjecctCategoryLink.module.css";
import Image from "next/image";
export default function ProjecctCategoryLink({ children, imgSrc }) {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={`${styles.colorOverlay}`}>
          <p className={styles.text}>{children}</p>
        </div>
        <Image
          src={imgSrc}
          alt="Category Image"
          style={{ width: "100%", objectFit: "cover", height: "auto" }}
          placeholder="blur"
        ></Image>
      </Link>
    </div>
  );
}
