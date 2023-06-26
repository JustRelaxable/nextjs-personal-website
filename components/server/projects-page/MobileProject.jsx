import ImageShowcase from "../../client/ImageShowcase";
import ProjectDescription from "./ProjectDescription";
import styles from "./MobileProject.module.css";
export default function MobileProject({ imageData, headerText, children }) {
  return (
    <div className={styles.container}>
      <ImageShowcase
        imageData={imageData}
        containerClass={styles.imageShowcaseContainer}
        controlContainerClass={styles.imageShowcaseControlContainer}
      ></ImageShowcase>
      <ProjectDescription headerText={headerText}>
        {children}
      </ProjectDescription>
    </div>
  );
}
