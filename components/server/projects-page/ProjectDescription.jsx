import SectionHeader from "../header/SectionHeader";
import PrimaryParagraph from "../text/PrimaryParagraph";
import styles from "./ProjectDescription.module.css";
export default function ProjectDescription({ headerText, children }) {
  return (
    <div className={styles.container}>
      <SectionHeader customContainerClass={styles.header}>
        {headerText}
      </SectionHeader>

      <PrimaryParagraph>{children}</PrimaryParagraph>
    </div>
  );
}
