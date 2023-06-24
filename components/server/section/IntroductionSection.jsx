import LinkButtonPrimary from "../button/link/LinkButtonPrimary";
import styles from "./IntroductionSection.module.css";
import pp from "../../../public/pp.jpg";
import Image from "next/image";
import PagePadding from "../layout/PagePadding";
export default function IntroductionSection() {
  return (
    <section className={styles.background}>
      <PagePadding
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.first}>
              <p>
                <span className={styles.greeting}>Hello, I am</span>
                <br />
                <span className={styles.name}>Taha Sökmen</span>
                <br />
                <span className={styles.work}>I am a developer.</span>
              </p>
            </div>
            <div className={styles.second}>
              <Image
                src={pp}
                alt="Profile Picture"
                style={{ width: "100%", height: "auto" }}
                className={styles.pp}
              ></Image>
            </div>
            <div className={styles.third}>
              <p className={styles.description}>
                I have always been a fast learner and new emerging technologies
                have always intrigued me. I have the mindset of an engineer and
                I have a strong analytical side.
              </p>
            </div>
            <div className={styles.fourth}>
              <LinkButtonPrimary href="/">
                Check out my Github!
              </LinkButtonPrimary>
            </div>
          </div>
        </section>
      </PagePadding>
    </section>
  );
}
