import Image from "next/image";
import styles from "./AboutMeSection.module.css";
import photo from "../../../public/about-me-photo.jpg";
import SectionHeader from "../header/SectionHeader";
import LinkButtonPrimary from "../button/link/LinkButtonPrimary";
export default function AboutMeSection() {
  return (
    <section className={styles.container}>
      <div className={styles.photoContainer}>
        <div className={styles.colorOverlay}></div>
        <Image
          src={photo}
          alt="Photo of myself on dinner"
          style={{ width: "100%", height: "auto" }}
          className={styles.photo}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <SectionHeader>About Me</SectionHeader>
        <p className={styles.aboutMeText}>
          I'm Taha Sokmen. I love coding, creating something, seeing the code I
          write working makes me happy. I have gained a lot of experience in
          application development, from desktop applications to mobile
          applications.
          <br />
          <br />I use the Unity game engine to develop games, so I developed
          myself in the C# programming language. In addition to developing
          games, I can develop desktop applications and backend applications
          using C#.
          <br />
          <br />
          Recently I have focused myself on web design and am learning HTML/CSS.
          I am very interested in blockchain technology as decentralized
          applications and web experience are very interesting to me. At the
          same time, I can write smart contracts through solidity. I have many
          projects that I have developed and worked on, you can find them on my
          github page.
        </p>
        <LinkButtonPrimary href="/">Check out my CV</LinkButtonPrimary>
      </div>
    </section>
  );
}
