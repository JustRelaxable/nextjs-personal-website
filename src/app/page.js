import AboutMeSection from "../../components/server/section/AboutMeSection";
import IntroductionSection from "../../components/server/section/IntroductionSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <IntroductionSection></IntroductionSection>
      <AboutMeSection></AboutMeSection>
    </div>
  );
}
