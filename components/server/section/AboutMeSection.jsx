import Image from "next/image";
import styles from "./AboutMeSection.module.css";
import photo from "../../../public/about-me-photo.jpg";
import SectionHeader from "../header/SectionHeader";
import LinkButtonPrimary from "../button/link/LinkButtonPrimary";
import PagePadding from "../layout/PagePadding";
import PrimaryParagraph from "../text/PrimaryParagraph";
export default function AboutMeSection() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <div className={styles.container}>
          <div className={styles.photoContainer}>
            <div className={styles.colorOverlay}></div>
            <Image
              src={photo}
              alt="Photo of myself on dinner"
              style={{ width: "100%" }}
              className={styles.photo}
              placeholder="blur"
            ></Image>
          </div>
          <div className={styles.textContainer}>
            <SectionHeader containerStyle={{ justifyContent: "flex-start" }}>
              About Me
            </SectionHeader>
            <PrimaryParagraph className={styles.aboutMeText}>
              My name is Taha Sökmen, and I am a passionate developer who finds
              joy in creating and witnessing the functionality of the code I
              write. With a strong background in development, I have gained
              extensive experience in building a wide range of applications and
              games, ranging from desktop to mobile platforms.
              <br />
              <br />
              While I initially specialized in using the Unity game engine for
              game development, which allowed me to master the C# programming
              language, I have since broadened my skill set to include web
              design. During my internship, I had the opportunity to work
              specifically in web design, honing my skills in creating visually
              appealing and user-friendly websites. I am proficient in HTML and
              CSS, and I continue to explore and expand my knowledge in this
              area.
              <br />
              <br />
              Combining my passion for coding, my proficiency in various
              programming languages, and my curiosity for emerging technologies,
              I am always seeking new opportunities to contribute to innovative
              projects and expand my skill set.
            </PrimaryParagraph>
            <LinkButtonPrimary href="/CV-Taha-Sokmen.pdf" target="_blank">
              Check out my CV
            </LinkButtonPrimary>
          </div>
        </div>
      </PagePadding>
    </section>
  );
}
